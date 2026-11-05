# @logomarks/mockups-plates

Photo plates for [`@logomarks/mockups`](https://github.com/Logomarks/mockups): real-looking scenes with blank signs that your art is composited into, so it reads as printed in the photo.

## Install

```bash
npm install @logomarks/mockups @logomarks/mockups-plates sharp
```

## Quick start

```js
import { plate, loadPlate, loadArt, renderImage } from '@logomarks/mockups/node';
import { PLATES } from '@logomarks/mockups-plates';

const p = await loadPlate(PLATES['billboard-dusk']);      // photo and maps inlined
const jpeg = await renderImage(plate(p, { art: await loadArt('cover.png') }), { format: 'jpeg' });
```

In a browser, `loadPlate` from `@logomarks/mockups/browser` fetches the same files (each plate's `base` is a URL next to this module).

## What's in it

- `PLATES`: every plate by name, with `base` set to where its files are
- `PLATE_NAMES`: `billboard-city`, `billboard-day`, `billboard-dusk`, `laptop-desk`, `poster-frame`, `shelter-night`, `shopfront`
- [Photo plates](https://github.com/Logomarks/mockups/blob/main/docs/photo-plates.md) in the mockups docs: how `plate` composites the art, and its options
- [Adding a plate](https://github.com/Logomarks/mockups-plates/blob/main/docs/adding-a-plate.md): the `tools/add.js` steps and the four kinds
- [PLATES.md](https://github.com/Logomarks/mockups-plates/blob/main/PLATES.md): each photo's source and licence (every one free to redistribute)

## Links

- [Docs](https://github.com/Logomarks/mockups-plates/tree/main/docs)
- [Changelog](https://github.com/Logomarks/mockups-plates/blob/main/CHANGELOG.md)
- [Licence](https://github.com/Logomarks/mockups-plates/blob/main/LICENSE)
- [GitHub](https://github.com/Logomarks/mockups-plates)

## Licence

MIT © ArrayPress Limited; author David Sherlock. The photos are credited in [PLATES.md](https://github.com/Logomarks/mockups-plates/blob/main/PLATES.md).
