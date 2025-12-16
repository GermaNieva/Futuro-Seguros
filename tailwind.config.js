
/**
 * tailwind.config.js
 *
 * Nota: este proyecto actualmente carga Tailwind vía CDN en cada HTML
 * usando `@tailwindcss/browser`.
 *
 * Este archivo queda como referencia si más adelante se migra a un flujo
 * de build (Tailwind CLI / PostCSS) para compilar CSS.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {},
	},
	plugins: [],
};

