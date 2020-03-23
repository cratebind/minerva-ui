/* eslint-disable react/prop-types */
import React from 'react';
import Docs from '../../gatsby-theme-docs/components/Docs';

export default function Docspage({ data: { mdx, ...rest }, pageContext }) {
  return <Docs mdx={mdx} pageContext={pageContext} />;
}
