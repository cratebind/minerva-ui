module.exports = {
  extends: [
    'cratebind',
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    "plugin:mdx/recommended"
  ],
  rules: {
    'import/no-unresolved': [2, { ignore: ['minerva-ui']}]
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]
      }
    }
  }
};