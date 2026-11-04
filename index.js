/**
 * @module @arraypress/mockups-plates
 *
 * Photo plates for @arraypress/mockups, by name. Each is a plate description
 * (its photo's size, each screen's corners, kind and maps) with `base` set to
 * where its files are, for `loadPlate`. Written by tools/index.js: edit the
 * plates' `plate.json`, not this.
 */

/**
 * Where a plate's files are.
 *
 * @param {string} name The plate.
 * @returns {string} Its directory's URL.
 */
const at = (name) => new URL(`./plates/${name}/`, import.meta.url).href;

/**
 * A plate's description, with where its files are.
 *
 * @param {string} name The plate.
 * @param {object} plate Its `plate.json`.
 * @returns {object} The plate, frozen, its `base` set.
 */
const entry = (name, plate) => Object.freeze({ ...plate, base: at(name) });

/** Every plate, by name. */
export const PLATES = Object.freeze({
	"billboard-city": entry("billboard-city", {"title":"A billboard on a brick building, sunny street","name":"billboard-city","width":2244,"height":1728,"photo":"photo.jpg","screens":[{"kind":"print","corners":[[545,655],[1799,143],[1822,960],[531,1143]],"aspect":3.57,"box":[528,140,1297,1006],"shading":"shading.jpg","noise":0.33}],"source":{"licence":"CC0-1.0","model":"FLUX.2 [klein] 4B (imagine --flux2), upscaled 2x with SwinIR-L","prompt":"a large blank white billboard on the side of a red brick building above a quiet city street, sunny afternoon, photo, 35mm, realistic, no text, no letters, no typography","seed":72,"note":"60 px cropped from the left (a shop sign); a small shop sign's pseudo-lettering painted out; corners set on the poster face inside the frame"}}),
	"billboard-day": entry("billboard-day", {"title":"A roadside billboard on a steel mast, golden hour","name":"billboard-day","width":2304,"height":1728,"photo":"photo.jpg","screens":[{"kind":"print","corners":[[527.07,260.52],[1775.47,181.98],[1780.29,894.56],[506.31,907.64]],"aspect":1.89,"box":[503,178,1281,733],"shading":"shading.jpg","noise":0.24,"mask":"mask.png","reflection":"reflection.jpg"}],"source":{"licence":"CC0-1.0","model":"FLUX.2 [klein] 4B (imagine --flux2), upscaled 2x with SwinIR-L","prompt":"an empty blank white roadside billboard on a single steel mast beside a country road, golden hour, photo, 35mm, realistic, no text, no letters, no typography","seed":12,"note":"the mast's bracket in front of the board masked by hand (sources/billboard-day-mask.png)"}}),
	"billboard-dusk": entry("billboard-dusk", {"title":"A floodlit roadside billboard at dusk","name":"billboard-dusk","width":2304,"height":1728,"photo":"photo.jpg","screens":[{"kind":"print","corners":[[641.52,544.05],[1702.59,430.8],[1710.79,937.41],[599.06,956.19]],"aspect":2.45,"box":[596,427,1118,533],"shading":"shading.jpg","noise":0.33,"mask":"mask.png","reflection":"reflection.jpg"}],"source":{"licence":"CC0-1.0","model":"FLUX.2 [klein] 4B (imagine --flux2), upscaled 2x with SwinIR-L","prompt":"a blank white roadside billboard on a steel mast at dusk, deep blue evening sky, two floodlights on arms lighting the board from below, countryside road, photo, 35mm, realistic, no text, no letters, no typography","seed":22,"note":"the floodlights and their flare in front of the board masked by hand (sources/billboard-dusk-mask.png)"}}),
	"laptop-desk": entry("laptop-desk", {"title":"A laptop on an oak desk by a window","name":"laptop-desk","width":2304,"height":1728,"photo":"photo.jpg","screens":[{"kind":"backlit","corners":[[649.43,333.44],[1781.3,363.28],[1734.97,1094.16],[614.82,969.8]],"aspect":1.6,"box":[611,330,1174,768],"shading":"shading.jpg","noise":0.38,"glow":0.08}],"source":{"licence":"CC0-1.0","model":"FLUX.2 [klein] 4B (imagine --flux2), upscaled 2x with SwinIR-L","prompt":"an open silver laptop with a blank white screen on a light oak desk by a window, a ceramic mug beside it, soft morning light, the keyboard in soft focus, shallow depth of field, photo, 50mm, realistic, no text, no letters, no typography","seed":83,"note":"aspect set to a 16:10 display"}}),
	"poster-frame": entry("poster-frame", {"title":"A framed poster on a painted brick wall","name":"poster-frame","width":2304,"height":1728,"photo":"photo.jpg","screens":[{"kind":"print","corners":[[694.11,210.6],[1658.68,209.04],[1667.42,1532.95],[691.98,1535.08]],"aspect":0.73,"box":[688,206,983,1333],"shading":"shading.jpg","noise":0.25,"reflection":"reflection.jpg"}],"source":{"licence":"CC0-1.0","model":"FLUX.2 [klein] 4B (imagine --flux2), upscaled 2x with SwinIR-L","prompt":"a blank white poster in a thin black metal frame hanging on a painted white brick wall, soft daylight from the side, photo, 35mm, realistic, no text, no letters, no typography","seed":51}}),
	"shelter-night": entry("shelter-night", {"title":"A bus-shelter 6-sheet lightbox at night, wet street","name":"shelter-night","width":2304,"height":1728,"photo":"photo.jpg","screens":[{"kind":"backlit","corners":[[878.41,423.85],[1379.32,359.13],[1375.19,1298.71],[877.08,1218.38]],"aspect":0.67,"box":[874,356,509,946],"shading":"shading.jpg","noise":0.36}],"source":{"licence":"CC0-1.0","model":"FLUX.2 [klein] 4B (imagine --flux2), upscaled 2x with SwinIR-L","prompt":"a blank white backlit advertising lightbox panel glowing in a modern glass bus shelter at night, wet pavement with reflections, empty street, photo, 35mm, realistic, no text, no letters, no typography","seed":41,"note":"aspect set to a 6-sheet's 2:3 (the lens can't be solved from one vanishing point)"}}),
	"shopfront": entry("shopfront", {"title":"A painted shop fascia, overcast London street","name":"shopfront","width":2100,"height":1728,"photo":"photo.jpg","screens":[{"kind":"paint","corners":[[330,235],[1971,259],[1972,535],[332,516]],"aspect":5.91,"box":[327,232,1648,306],"shading":"shading.jpg","noise":0.28}],"source":{"licence":"CC0-1.0","model":"FLUX.2 [klein] 4B (imagine --flux2), upscaled 2x with SwinIR-L","prompt":"a blank cream painted wooden shop fascia sign board above a traditional shopfront with a large display window and a door, London terrace street, overcast daylight, photo, 35mm, realistic, no text, no letters, no typography","seed":32,"note":"204 px cropped from the right (a neighbour's sign, a parked car's plate); a sticker's pseudo-lettering painted out; corners set on the fascia's recessed panel"}}),
});

/** The plates' names. */
export const PLATE_NAMES = Object.freeze(Object.keys(PLATES));
