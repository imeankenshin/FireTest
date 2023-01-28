module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.{html,jsx,tsx,js,ts}' }],

	tailwindConfig: './tailwind.config.js'
};
