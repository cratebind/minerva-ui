import React from 'react';
import Link from 'next/link';
import * as Minerva from 'minerva-ui';

const minervaComponents = Object.keys(Minerva);

function validateComponentName(name: string) {
  if (!minervaComponents.includes(name)) {
    throw new Error(
      `"${name}" is not a valid Minerva component name. Valid component names include:\n${minervaComponents.join(
        '\n'
      )}`
    );
  }
}

const getSourceUrl = (componentName: string) => {
  validateComponentName(componentName);

  return `https://github.com/cratebind/minerva-ui/blob/master/src/${componentName}/index.tsx`;
};

const getDocsUrl = (componentName: string) => {
  validateComponentName(componentName);

  return `https://github.com/cratebind/minerva-ui/blob/master/docs/pages/components/${componentName}.mdx`;
};

export const LinkSection = ({ component }) => {
  return (
    <div>
      {/* external anchor tag link */}
      <a
        href={getSourceUrl(component)}
        className="flex items-center"
        target="_blank"
        rel="noreferrer"
      >
        View Source Code
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
      <a
        href={getDocsUrl(component)}
        className="flex items-center"
        target="_blank"
        rel="noreferrer"
      >
        Edit This Page
      </a>
    </div>
  );
};
