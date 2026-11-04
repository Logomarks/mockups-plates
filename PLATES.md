# Plates: sources and licences

Every photo here is free to redistribute with this package. There are no stock-library photos (Unsplash's and Pexels' licences forbid redistributing them in an asset pack). No photo shows a trademark, a real brand, legible real signage or an identifiable person.

## Generated plates

These were made on a Mac with the `imagine` CLI using **FLUX.2 [klein] 4B** (Black Forest Labs, Apache-2.0: its output may be used and redistributed commercially). They were upscaled 2× with **SwinIR-L** (Apache-2.0) and re-encoded as JPEG. The terms of the non-commercial models (FLUX.3, FLUX.2 9B) would not allow this, so no plate uses them. Where a picture held stray pseudo-lettering, that patch was cropped away or painted out by hand; the note says so.

The pictures are AI-generated, and each `plate.json` records the model, prompt and seed under `source`. ArrayPress Limited dedicates them to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), to the extent it holds any rights in them.

| Plate | Kind | Prompt | Seed | Notes |
|---|---|---|---|---|
| `billboard-day` | print | an empty blank white roadside billboard on a single steel mast beside a country road, golden hour, photo, 35mm, realistic, no text, no letters, no typography | 12 | the mast's bracket in front of the board masked by hand (sources/billboard-day-mask.png) |
| `billboard-dusk` | print | a blank white roadside billboard on a steel mast at dusk, deep blue evening sky, two floodlights on arms lighting the board from below, countryside road, photo, 35mm, realistic, no text, no letters, no typography | 22 | the floodlights and their flare in front of the board masked by hand (sources/billboard-dusk-mask.png) |
| `billboard-city` | print | a large blank white billboard on the side of a red brick building above a quiet city street, sunny afternoon, photo, 35mm, realistic, no text, no letters, no typography | 72 | 60 px cropped from the left (a shop sign); a small shop sign's pseudo-lettering painted out; corners set on the poster face inside the frame |
| `shopfront` | paint | a blank cream painted wooden shop fascia sign board above a traditional shopfront with a large display window and a door, London terrace street, overcast daylight, photo, 35mm, realistic, no text, no letters, no typography | 32 | 204 px cropped from the right (a neighbour's sign, a parked car's plate); a sticker's pseudo-lettering painted out; corners set on the fascia's recessed panel |
| `shelter-night` | backlit | a blank white backlit advertising lightbox panel glowing in a modern glass bus shelter at night, wet pavement with reflections, empty street, photo, 35mm, realistic, no text, no letters, no typography | 41 | aspect set to a 6-sheet's 2:3 (the lens can't be solved from one vanishing point) |
| `poster-frame` | print | a blank white poster in a thin black metal frame hanging on a painted white brick wall, soft daylight from the side, photo, 35mm, realistic, no text, no letters, no typography | 51 |  |
| `laptop-desk` | backlit | an open silver laptop with a blank white screen on a light oak desk by a window, a ceramic mug beside it, soft morning light, the keyboard in soft focus, shallow depth of field, photo, 50mm, realistic, no text, no letters, no typography | 83 | aspect set to a 16:10 display |

Hand-painted occluder masks (`--mask`) are kept in `sources/`. They aren't shipped.

## Photographs

None yet. A photograph needs a CC0 or public-domain licence, checked on the file's own licence page (for Wikimedia Commons, the file page's licence box, not the search filter). Record it as:

| Plate | Kind | Source | Author | Licence |
|---|---|---|---|---|

## Adding one

See the README: drop the photo in, run `node tools/add.js photo.jpg --name … --licence …`, check `check/<name>.jpg` at 100%, and add a row here.
