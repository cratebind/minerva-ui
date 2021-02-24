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
    "import/no-unused-modules": 0,
    'react/display-name': 1,
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"],
        moduleDirectory: ['node_modules', 'src/'],
      },
      "typescript": {},
    }
  }
};