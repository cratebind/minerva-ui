module.exports = {
  extends: [
    'cratebind',
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    "plugin:mdx/recommended"
  ],
  rules: {
    'import/no-unresolved': [2, { ignore: ['minerva-ui', '@docusaurus', '@theme'] }],
    "import/no-unused-modules": [
      2,
      {
        "unusedExports": true,
        "ignoreExports": ["docs/src/pages/**/**.js", "docs/docusaurus-theme-live-codeblock/**/*.js"]
      }
    ],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]
      }
    }
  }
};