# @arraypress/mockups-plates

Photo plates for [`@arraypress/mockups`](https://github.com/arraypress/mockups). Each plate is a photo of a real-looking scene (a roadside billboard, a shop fascia, a bus-shelter lightbox, a framed poster, a laptop) with each sign's corners, kind, shading, occluders and reflections. The core's compositor warps your art into the sign and multiplies it by the blank sign's own light, so it reads as printed in the photo.

Kept apart from the core because photos are heavy. Every photo is free to redistribute: see [PLATES.md](PLATES.md).

## Install

```bash
npm install @arraypress/mockups @arraypress/mockups-plates sharp
```

## Usage

```js
import { plate, loadPlate, loadArt, renderImage } from '@arraypress/mockups/node';
import { PLATES } from '@arraypress/mockups-plates';

const p = await loadPlate(PLATES['billboard-dusk']);      // photo and maps inlined
const jpeg = await renderImage(plate(p, { art: await loadArt('cover.png') }), { format: 'jpeg' });
```

In a browser, `loadPlate` from `@arraypress/mockups/browser` fetches the same files (each plate's `base` is a URL next to this module).

## API

| Export | |
|---|---|
| `PLATES` | Every plate by name: a plate description with `base` set to where its files are. |
| `PLATE_NAMES` | The names. |

## Adding a plate

1. Take or generate a photo whose sign is blank: white for print and lightboxes, any light paint for a painted board. Keep text, logos and people out of it. If the photo shows a design on the sign, also keep a copy with the sign blank (`--blank`).
2. Add it. The sign's corners are found as the brightest even quadrilateral; pass `--near x,y` to pick one, or `--corners "x,y x,y x,y x,y"` to set them yourself:

   ```bash
   node tools/add.js photo.jpg --name billboard-dusk --kind print --licence CC0-1.0 --url https://…
   ```

   This writes `plates/billboard-dusk/` (`photo.jpg`, `plate.json`, `shading.jpg`, and `mask.png` when something stands in front of the sign), rewrites `index.js`, and renders a test card into the sign at `check/billboard-dusk.jpg`.
3. Look at the check render at 100%: the grid follows the sign and the circle is round. If not, adjust `--aspect`, `--corners` or `--soften` and run it again. Occluders darker than the sign are found automatically (`--dark` sets how much darker). For anything else in front of the sign, such as a lamp or a sunlit bracket, paint a mask at the photo's size, white where it stands in front. Keep it in `sources/` and pass `--mask`.
4. Add the photo's source and licence to [PLATES.md](PLATES.md).

Kinds: `print` (paper or vinyl lit by the scene), `paint` (a painted board, its colour divided out), `backlit` (a lightbox or a display: glows), `glass` (a print behind glass: its reflections laid back over the art).

## License

MIT © ArrayPress Limited. The photos are credited in [PLATES.md](PLATES.md).
