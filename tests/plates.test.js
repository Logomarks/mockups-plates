/**
 * @logomarks/mockups-plates — every plate is well formed, its files are there and in the package, its provenance is
 * recorded, and it loads and composites.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { checkPlate, plate, loadPlate } from '@logomarks/mockups/node';
import { PLATES, PLATE_NAMES } from '../index.js';

const ART = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10"><rect width="30" height="10" fill="#c0392b"/></svg>';

describe('plates', () => {
	it('lists every plate, each named for its directory', () => {
		assert.ok(PLATE_NAMES.length >= 7);
		for (const name of PLATE_NAMES) {
			assert.equal(PLATES[name].name, name);
			assert.ok(PLATES[name].base?.endsWith(`/plates/${name}/`));
		}
	});

	it('is well formed, with its files present and its source and licence recorded', async () => {
		const credits = await readFile(new URL('../PLATES.md', import.meta.url), 'utf8');
		for (const name of PLATE_NAMES) {
			const p = checkPlate(PLATES[name]);
			assert.ok(p.source?.licence, `${name}: a licence`);
			assert.ok(credits.includes(`\`${name}\``), `${name}: credited in PLATES.md`);
			for (const f of [p.photo, ...p.screens.flatMap((s) => [s.shading, s.mask, s.reflection])].filter(Boolean)) {
				assert.ok((await stat(new URL(/** @type {string} */ (f), p.base))).size > 0, `${name}/${f}`);
			}
			for (const s of p.screens) {
				for (const [x, y] of s.corners) assert.ok(x >= 0 && y >= 0 && x <= p.width && y <= p.height, `${name}: corners inside the photo`);
				assert.ok(s.box[0] + s.box[2] <= p.width && s.box[1] + s.box[3] <= p.height, `${name}: box inside the photo`);
			}
		}
	});

	it('loads and composites', async () => {
		const p = await loadPlate(PLATES[PLATE_NAMES[0]]);
		assert.match(p.photo, /^data:image\/jpeg;base64,/);
		const m = plate(p, { art: ART });
		assert.equal(m.width, p.width);
		assert.match(m.svg, /mix-blend-mode:multiply/);
	});
});
