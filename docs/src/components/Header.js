import React from 'react';
import { Heading } from 'minerva-ui';
import CodeHighlight from '../@rocketseat/gatsby-theme-docs/components/Code';

export default function Header({ description, components = [] }) {
  return (
    <>
      <Heading fontSize="32px" as="h2">
        Import
      </Heading>
      {/* <code> */}
      <CodeHighlight className="javascript">{`import { ${components.join(
        ','
      )} } from 'minerva-ui'`}</CodeHighlight>
    </>
  );
}
