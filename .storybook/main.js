module.exports = {
  stories: ['../stories/**/*.stories.(js|tsx|mdx)','../src/**/*.stories.(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-docs/preset',
    '@storybook/preset-typescript',
    // './register',
  ]
}