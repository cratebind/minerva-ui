const path = require('path');
const { readdirSync, readFileSync } = require('fs');

const getDirectoryPaths = folderName =>
  readdirSync(path.resolve(__dirname, `docs/${folderName}`)).map(
    file => `${folderName}/${file.split('.')[0]}`
  );

// const componentPaths = readdirSync(
//   path.resolve(__dirname, 'docs/components')
// ).map(file => `components/${file.split('.')[0]}`);

const componentPaths = getDirectoryPaths('components');

module.exports = {
  docs: [
    { id: 'getting-started', type: 'doc' },
    { id: 'concepts', type: 'doc' },
    { id: 'theming', type: 'doc' },
    { id: 'utilities', type: 'doc' },
    {
      type: 'category',
      label: 'Components',
      items: getDirectoryPaths('components'),
    },
    {
      type: 'category',
      label: 'Examples',
      items: getDirectoryPaths('examples'),
    },
  ],
};
