import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Text } from 'minerva-ui';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import PostNav from '@rocketseat/gatsby-theme-docs/src/components/Docs/PostNav';
import EditGithub from '@rocketseat/gatsby-theme-docs/src/components/Docs/EditGithub';

const components = {
  p: props => <Text m={0} {...props} />,
};

export default function Docs({ mdx, pageContext }) {
  const { prev, next, githubEditUrl } = pageContext;
  const { title, description, image, disableTableOfContents } = mdx.frontmatter;
  const { headings, body } = mdx;
  const { slug } = mdx.fields;

  return (
    <>
      <SEO title={title} description={description} slug={slug} image={image} />
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        <MDXRenderer components={components}>{body}</MDXRenderer>
        <EditGithub githubEditUrl={githubEditUrl} />
        <PostNav prev={prev} next={next} />
      </Layout>
    </>
  );
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    headings: PropTypes.array,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      disableTableOfContents: PropTypes.bool,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
    githubEditUrl: PropTypes.string,
  }).isRequired,
};
