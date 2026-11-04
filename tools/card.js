/**
 * The test card the check render puts in each screen.
 */

/**
 * A test card at a sign's proportions.
 *
 * @param {number} aspect Its width over its height.
 * @returns {string} SVG markup.
 */
export function testCard(aspect) {
	const [w, h] = [1000 * aspect, 1000];
	let lines = '';
	for (let x = 0; x <= w; x += 100) lines += `<path d="M${x} 0V${h}" stroke="#1d3557" stroke-width="${x % 500 ? 2 : 6}"/>`;
	for (let y = 0; y <= h; y += 100) lines += `<path d="M0 ${y}H${w}" stroke="#1d3557" stroke-width="${y % 500 ? 2 : 6}"/>`;
	const corner = (x, y) => `<circle cx="${x}" cy="${y}" r="60" fill="#e63946"/>`;
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#f1faee"/>${lines}<circle cx="${w / 2}" cy="${h / 2}" r="380" fill="none" stroke="#e63946" stroke-width="24"/>${corner(0, 0)}${corner(w, 0)}${corner(w, h)}${corner(0, h)}</svg>`;
}
