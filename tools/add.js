/**
 * Adds a plate: a photo in, a plate directory out (the photo as JPEG, the
 * sign's corners found, its shading, occluders and reflections cut from the
 * blank sign), then the index rewritten and a check render written beside
 * the tools so the fit can be looked at.
 *
 *   node tools/add.js photo.jpg --name billboard-dusk --kind print \
 *     [--blank blank.jpg] [--near x,y | --corners "x,y x,y x,y x,y"] [--aspect 3] \
 *     [--soften 0.8] [--glow 0.5] [--sheen 0.05] [--dark 0.55] [--no-occluders] [--mask mask.png] \
 *     [--screens screens.json] [--title "…"] \
 *     [--licence CC0-1.0] [--url …] [--author …] [--model …] [--prompt …] [--seed 7] [--note …]
 *
 * `--mask` adds a hand-painted occluder mask (the photo's size, white where
 * something stands in front of the sign) to what's found; keep its source in
 * sources/. `--screens` takes a JSON array of screens (each `{ kind,
 * corners?, near?, aspect?, mask?, … }`) for a photo with more than one sign.
 */

import { parseArgs } from 'node:util';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { makePlate, savePlate } from '@arraypress/mockups/node';
import { writeIndex } from './index.js';
import { checkRender } from './check.js';
import { point, corners, number } from './args.js';

const { values: o, positionals } = parseArgs({
	allowPositionals: true,
	options: {
		name: { type: 'string' },
		kind: { type: 'string', default: 'print' },
		blank: { type: 'string' },
		mask: { type: 'string' },
		near: { type: 'string' },
		corners: { type: 'string' },
		aspect: { type: 'string' },
		soften: { type: 'string' },
		glow: { type: 'string' },
		sheen: { type: 'string' },
		dark: { type: 'string' },
		'no-occluders': { type: 'boolean', default: false },
		screens: { type: 'string' },
		title: { type: 'string' },
		licence: { type: 'string' },
		url: { type: 'string' },
		author: { type: 'string' },
		model: { type: 'string' },
		prompt: { type: 'string' },
		seed: { type: 'string' },
		note: { type: 'string' },
		size: { type: 'string' },
	},
});
const [photo] = positionals;
if (!photo || !o.name || !o.licence) {
	console.error('usage: node tools/add.js photo.jpg --name NAME --licence LICENCE [--kind print|paint|backlit|glass] [options] (see the file header)');
	process.exit(2);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(o.name)) throw new TypeError(`--name is kebab-case (got ${o.name})`);

const screens = o.screens
	? JSON.parse(await readFile(o.screens, 'utf8'))
	: [{ kind: o.kind, near: point(o.near), corners: corners(o.corners), aspect: number(o.aspect), soften: number(o.soften), glow: number(o.glow), sheen: number(o.sheen), dark: number(o.dark), occluders: !o['no-occluders'], mask: o.mask }];
const source = Object.fromEntries(Object.entries({ licence: o.licence, url: o.url, author: o.author, model: o.model, prompt: o.prompt, seed: number(o.seed), note: o.note }).filter(([, v]) => v !== undefined));
const made = await makePlate(photo, { name: o.name, screens, blank: o.blank, size: number(o.size), source });
if (o.title) made.plate = { title: o.title, ...made.plate };
const dir = fileURLToPath(new URL(`../plates/${o.name}/`, import.meta.url));
console.log('wrote', await savePlate(dir, made));
for (const s of made.plate.screens) console.log(`  ${s.kind}: corners ${JSON.stringify(s.corners)}, aspect ${s.aspect}, noise ${s.noise}${s.mask ? ', occluders found' : ''}`);
await writeIndex();
console.log('check render:', await checkRender(o.name));
