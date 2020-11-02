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
      1,
      {
        "unusedExports": true,
      }
    ],
    'react/display-name': 1,
    'react/react-in-jsx-scope': 0
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]
      }
    }
  }
};