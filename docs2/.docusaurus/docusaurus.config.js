export default {
  "plugins": [],
  "themes": [
    "/Users/mwood/code/minerva-ui/docs2/docusaurus-theme-live-codeblock"
  ],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Minerva UI",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/doc1",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 My Project, Inc. Built with Docusaurus."
    }
  },
  "title": "Minerva UI",
  "tagline": "Composable, Low-Level React Components",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "cratebind",
  "projectName": "minerva-ui",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/mwood/code/minerva-ui/docs2/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/mwood/code/minerva-ui/docs2/src/css/custom.css"
        }
      }
    ]
  ]
};