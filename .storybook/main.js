const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)', '../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  // addons: [
  //   // '@storybook/addon-actions/register',
  //   // '@storybook/addon-links/register',
  //   '@storybook/addon-docs/preset',
  //   '@storybook/preset-typescript',
  //   // './register',
  // ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: false, // type-check stories during Storybook build
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) => {
    //     return (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    //   },
    // },
  },
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   use: [
    //     {
    //       loader: require.resolve('ts-loader'),
    //       options: {
    //         transpileOnly: true,
    //       },
    //     },
    //     {
    //       loader: require.resolve('react-docgen-typescript-loader'),
    //     },
    //   ],
    // });

    config.plugins.push(
      new webpack.DefinePlugin({
        '__DEV__': process.env.NODE_ENV === 'development'
      })
    );

    // config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
}