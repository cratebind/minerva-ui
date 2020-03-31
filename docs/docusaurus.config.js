const path = require('path');

module.exports = {
  title: 'Minerva UI',
  tagline: 'Composable, Low-Level React Components',
  url: 'https://minerva-ui.netlify.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cratebind', // Usually your GitHub org/user name.
  projectName: 'minerva-ui', // Usually your repo name.
  themes: [path.resolve(__dirname, './docusaurus-theme-live-codeblock')],
  themeConfig: {
    navbar: {
      title: 'Minerva UI',
      // logo: {
      //   alt: 'Minerva Logo',
      //   src: 'img/logo.svg',
      // },
      links: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/components/Alert',
          activeBasePath: 'docs/components',
          label: 'Components',
          position: 'left',
        },
        {
          to: 'theme-builder',
          activeBasePath: 'theme-builder',
          label: 'Theme Builder',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/cratebind/minerva-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2',
            // },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minerva UI, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cratebind/minerva-ui/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
