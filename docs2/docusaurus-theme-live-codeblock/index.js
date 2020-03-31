/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');

module.exports = function() {
  return {
    name: 'docusaurus-theme-live-codeblock',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              options: {
                allowTsInNodeModules: true
              }
              // exclude: /node_modules/,
            },
          ]
        },
        resolve: {
          extensions: [ '.tsx', '.ts', '.js' ],
          alias: {
            // fork of Buble which removes Buble's large dependency and weighs in
            // at a smaller size of ~51kB
            // https://github.com/FormidableLabs/react-live#what-bundle-size-can-i-expect
            buble: '@philpl/buble',
          },
        },
      };
    },
  };
};
