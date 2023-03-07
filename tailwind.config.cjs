/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'soft-amber': {
					50: '#f8f6f4',
					100: '#efece5',
					200: '#dfd7c9',
					300: '#cfc2af',
					400: '#b49d83',
					500: '#a5876a',
					600: '#98775e',
					700: '#7e6150',
					800: '#675045',
					900: '#554239',
				},
				woodsmoke: {
					50: '#f5f8f8',
					100: '#e0e6e7',
					200: '#c0cecf',
					300: '#98aeb0',
					400: '#728b8f',
					500: '#587074',
					600: '#45585c',
					700: '#3a474b',
					800: '#313c3e',
					900: '#161a1b',
				},
			},
			fontFamily: {
				nunito: ['Nunito Sans', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				grunge: ['grunge', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
