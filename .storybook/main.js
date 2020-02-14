module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)','../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-docs/react/preset',
    '@storybook/preset-typescript',
    // './register',
  ]
}