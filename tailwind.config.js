const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{html,ts,tsx,js,jsx}'],
	theme: {
		extend: {
			height: { 'screen-=nav': 'calc(100vh　-　4rem)' }
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('scroll', '&::-webkit-scrollbar');
			addVariant('scroll-tb', '&::-webkit-scrollbar-thumb');
			addVariant('scroll-tb-active', '&::-webkit-scrollbar-thumb:active');
			addVariant('child', '&>*');
			addVariant('childAll', '&_*');
		})
	]
};
