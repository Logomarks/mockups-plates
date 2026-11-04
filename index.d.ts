import type { Plate } from '@arraypress/mockups';

/** A plate's name. */
export type PlateName = "billboard-city" | "billboard-day" | "billboard-dusk" | "laptop-desk" | "poster-frame" | "shelter-night" | "shopfront";

/** Every plate, by name, its `base` set to where its files are (pass one to `loadPlate`). */
export const PLATES: Readonly<Record<PlateName, Plate>>;
/** The plates' names. */
export const PLATE_NAMES: readonly PlateName[];
