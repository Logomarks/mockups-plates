/**
 * Writes `index.js` and `index.d.ts` from every `plates/<name>/plate.json`:
 * each plate's description with its `base` (where its files are) set, so
 * `loadPlate(PLATES[name])` finds them from Node or a browser.
 *
 * Run: `node tools/index.js` (`tools/add.js` runs it after adding a plate).
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('../', import.meta.url);

/**
 * Every plate's description, by name, sorted.
 *
 * @returns {Promise<{ name: string, plate: Record<string, unknown> }[]>} The plates.
 */
export async function readPlates() {
	const dirs = (await readdir(new URL('plates/', ROOT), { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name).sort();
	const out = [];
	for (const name of dirs) {
		const json = await readFile(new URL(`plates/${name}/plate.json`, ROOT), 'utf8').catch(() => null);
		if (json) out.push({ name, plate: JSON.parse(json) });
	}
	return out;
}

/**
 * Writes the index modules.
 *
 * @returns {Promise<string[]>} The plates' names.
 */
export async function writeIndex() {
	const plates = await readPlates();
	const body = plates.map(({ name, plate }) => `\t${JSON.stringify(name)}: entry(${JSON.stringify(name)}, ${JSON.stringify(plate)}),`).join('\n');
	const js = `/**
 * @module @logomarks/mockups-plates
 *
 * Photo plates for @logomarks/mockups, by name. Each is a plate description
 * (its photo's size, each screen's corners, kind and maps) with \`base\` set to
 * where its files are, for \`loadPlate\`. Written by tools/index.js: edit the
 * plates' \`plate.json\`, not this.
 */

/**
 * Where a plate's files are.
 *
 * @param {string} name The plate.
 * @returns {string} Its directory's URL.
 */
const at = (name) => new URL(\`./plates/\${name}/\`, import.meta.url).href;

/**
 * A plate's description, with where its files are.
 *
 * @param {string} name The plate.
 * @param {object} plate Its \`plate.json\`.
 * @returns {object} The plate, frozen, its \`base\` set.
 */
const entry = (name, plate) => Object.freeze({ ...plate, base: at(name) });

/** Every plate, by name. */
export const PLATES = Object.freeze({
${body}
});

/** The plates' names. */
export const PLATE_NAMES = Object.freeze(Object.keys(PLATES));
`;
	const names = plates.map((p) => JSON.stringify(p.name)).join(' | ') || 'never';
	const dts = `import type { Plate } from '@logomarks/mockups';

/** A plate's name. */
export type PlateName = ${names};

/** Every plate, by name, its \`base\` set to where its files are (pass one to \`loadPlate\`). */
export const PLATES: Readonly<Record<PlateName, Plate>>;
/** The plates' names. */
export const PLATE_NAMES: readonly PlateName[];
`;
	await writeFile(new URL('index.js', ROOT), js);
	await writeFile(new URL('index.d.ts', ROOT), dts);
	return plates.map((p) => p.name);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) console.log((await writeIndex()).join('\n'));
