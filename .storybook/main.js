const path = require('path');

module.exports = {
	stories: ['../src/stories/*.stories.mdx', '../src/stories/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-create-react-app',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
    /*
        storybook configuration for aliases
        https://stackoverflow.com/questions/61193735/storybook-with-craco-call-a-different-verson-of-react-scripts
    */
	webpackFinal(config) {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					'@': path.resolve(__dirname, '../src/'),
				},
			},
		};
	},
};
