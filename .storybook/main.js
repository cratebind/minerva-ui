const webpack = require('webpack');

module.exports = {
  stories: ['../stories/**/*.stories.(js|tsx|mdx)','../src/**/*.stories.(js|tsx|mdx)'],
  addons: [
    // '@storybook/addon-actions/register',
    // '@storybook/addon-links/register',
    '@storybook/addon-docs/preset',
    '@storybook/preset-typescript',
    // './register',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        '__DEV__': process.env.NODE_ENV === 'development'
      })
    );

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
}