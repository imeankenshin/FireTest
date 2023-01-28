/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{html,ts,tsx,js,jsx}'],
	theme: {
		extend: {
			height: { 'screen-=nav': 'calc(100vh　-　4rem)' },
		}
	},
	plugins: []
};
