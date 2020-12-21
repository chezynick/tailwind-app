module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				16: '25% 50% 25%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
