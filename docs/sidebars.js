const path = require('path');
const { readdirSync } = require('fs');

const getDirectoryPaths = folderName =>
  readdirSync(path.resolve(__dirname, `docs/${folderName}`)).map(
    file => `${folderName}/${file.split('.')[0]}`
  );

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
      label: 'Utilities',
      items: getDirectoryPaths('utilities'),
    },
    {
      type: 'category',
      label: 'Examples',
      items: getDirectoryPaths('examples'),
    },
  ],
};
