/**
 * Renders a plate with a test card in each screen (a grid, a circle that
 * should look round when the aspect is right, and the corners marked), to
 * check/<name>.jpg, so a new plate's fit can be judged at 100%.
 *
 *   node tools/check.js NAME [--art art.png]
 */

import { parseArgs } from 'node:util';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { loadPlate, plate, renderImage } from '@logomarks/mockups/node';
import { testCard } from './card.js';

/**
 * Renders the check image.
 *
 * @param {string} name The plate.
 * @param {string | Uint8Array} [art] Art to use instead of the test card.
 * @returns {Promise<string>} Where it was written.
 */
export async function checkRender(name, art) {
	const p = await loadPlate(fileURLToPath(new URL(`../plates/${name}/`, import.meta.url)));
	const arts = art ? [art] : p.screens.map((s) => testCard(s.aspect));
	const out = fileURLToPath(new URL(`../check/${name}.jpg`, import.meta.url));
	await mkdir(fileURLToPath(new URL('../check/', import.meta.url)), { recursive: true });
	await writeFile(out, await renderImage(plate(p, { art: arts }), { format: 'jpeg', quality: 90 }));
	return out;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	const { values, positionals } = parseArgs({ allowPositionals: true, options: { art: { type: 'string' } } });
	if (!positionals[0]) {
		console.error('usage: node tools/check.js NAME [--art art.png]');
		process.exit(2);
	}
	console.log(await checkRender(positionals[0], values.art ? await readFile(values.art) : undefined));
}
