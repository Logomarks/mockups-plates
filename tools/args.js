/**
 * Small helpers for the tools' command lines.
 */

/**
 * A point from `x,y`.
 *
 * @param {string | undefined} s The text.
 * @returns {[number, number] | undefined} The point.
 * @throws {TypeError} When it isn't two numbers.
 */
export function point(s) {
	if (s === undefined) return undefined;
	const p = s.split(',').map(Number);
	if (p.length !== 2 || p.some((v) => !Number.isFinite(v))) throw new TypeError(`expected x,y (got ${JSON.stringify(s)})`);
	return /** @type {[number, number]} */ (p);
}

/**
 * Four corners from `x,y x,y x,y x,y` (clockwise from the top-left).
 *
 * @param {string | undefined} s The text.
 * @returns {[number, number][] | undefined} The corners.
 * @throws {TypeError} When there aren't four points.
 */
export function corners(s) {
	if (s === undefined) return undefined;
	const q = s.trim().split(/\s+/).map(point);
	if (q.length !== 4) throw new TypeError(`expected four corners "x,y x,y x,y x,y" (got ${JSON.stringify(s)})`);
	return /** @type {[number, number][]} */ (q);
}

/**
 * A number, or nothing.
 *
 * @param {string | undefined} s The text.
 * @returns {number | undefined} The number.
 * @throws {TypeError} When it isn't one.
 */
export function number(s) {
	if (s === undefined) return undefined;
	const v = Number(s);
	if (!Number.isFinite(v)) throw new TypeError(`expected a number (got ${JSON.stringify(s)})`);
	return v;
}
