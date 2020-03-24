module.exports = {
  extends: [
    'cratebind',
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    "plugin:mdx/recommended"
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]
      }
    }
  }
};