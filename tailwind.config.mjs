/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  fontFamily: {
		sans: ["Inter", "sans-serif"],
		exo: ["'Exo 2'", "sans-serif"],
	  },
	},
	plugins: [require("@tailwindcss/typography")],
};