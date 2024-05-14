/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		extend: {
			colors: {
				peachfuzz: {
					50: '#fff4ed',
					100: '#ffe6d5',
					200: '#febe98',
					300: '#fda474',
					400: '#fb733c',
					500: '#f94e16',
					600: '#ea340c',
					700: '#c2230c',
					800: '#9a1e12',
					900: '#7c1c12',
					950: '#430a07'
				}
			}
		}
	}
};
