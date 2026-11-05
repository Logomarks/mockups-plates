# Adding a plate

1. Take or generate a photo whose sign is blank: white for print and lightboxes, any light paint for a painted board. Keep text, logos and people out of it. If the photo shows a design on the sign, also keep a copy with the sign blank (`--blank`).
2. Add it. The sign's corners are found as the brightest even quadrilateral; pass `--near x,y` to pick one, or `--corners "x,y x,y x,y x,y"` to set them yourself:

   ```bash
   node tools/add.js photo.jpg --name billboard-dusk --kind print --licence CC0-1.0 --url https://…
   ```

   This writes `plates/billboard-dusk/` (`photo.jpg`, `plate.json`, `shading.jpg`, and `mask.png` when something stands in front of the sign), rewrites `index.js`, and renders a test card into the sign at `check/billboard-dusk.jpg`.
3. Look at the check render at 100%: the grid follows the sign and the circle is round. If not, adjust `--aspect`, `--corners` or `--soften` and run it again. Occluders darker than the sign are found automatically (`--dark` sets how much darker). For anything else in front of the sign, such as a lamp or a sunlit bracket, paint a mask at the photo's size, white where it stands in front. Keep it in `sources/` and pass `--mask`.
4. Add the photo's source and licence to [PLATES.md](../PLATES.md).

## Kinds

- `print`: paper or vinyl lit by the scene.
- `paint`: a painted board, its colour divided out.
- `backlit`: a lightbox or a display, which glows.
- `glass`: a print behind glass, its reflections laid back over the art.
