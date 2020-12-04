/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const browserify = require('@cypress/browserify-preprocessor');

const { initPlugin } = require('cypress-plugin-snapshots/plugin');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on(
    'file:preprocessor',
    browserify({
      typescript: require.resolve('typescript'),
    })
  );

  initPlugin(on, config);
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  return config;
};
