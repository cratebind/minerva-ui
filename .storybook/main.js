const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)', '../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: false, // type-check stories during Storybook build
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    // allow __DEV__ macro to be used
    config.plugins.push(
      new webpack.DefinePlugin({
        '__DEV__': process.env.NODE_ENV === 'development'
      })
    );

    return config;
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
}