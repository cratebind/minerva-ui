import React from 'react';

export default {
  github: 'https://github.com/cratebind/minerva-ui',
  titleSuffix: ' – Minerva UI',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Minerva UI</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Composable React Components
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Minerva UI: Composable React Components"
      />
      <meta
        name="og:description"
        content="Minerva UI: Composable React Components"
      />
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:site" content="@shuding_" /> */}
      <meta
        name="og:title"
        content="Minerva UI: Composable React Component Library"
      />
      <meta name="apple-mobile-web-app-title" content="Minerva UI" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © Cratebind.</>,
};
