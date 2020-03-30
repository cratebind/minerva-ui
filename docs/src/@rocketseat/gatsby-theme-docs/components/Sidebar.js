import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem,
} from '@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles';
import { isExternalUrl } from '@rocketseat/gatsby-theme-docs/src/util/url.js';
import ExternalLink from '@rocketseat/gatsby-theme-docs/src/components/Sidebar/ExternalLink';
import InternalLink from '@rocketseat/gatsby-theme-docs/src/components/Sidebar/InternalLink';
import Logo from '@rocketseat/gatsby-theme-docs/src/components/Logo';

const CustomItem = props => <Item style={{ lineHeight: '22px' }} {...props} />;

function ListWithSubItems({ children, text }) {
  return (
    <>
      <Heading style={{ marginTop: 10 }}>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const {
    site: {
      siteMetadata: { footer, basePath },
    },
    components,
    examples,
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          footer
          basePath
        }
      }
      components: allMdx(
        filter: { fields: { slug: { regex: "/(components)/" } } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
      examples: allMdx(
        filter: { fields: { slug: { regex: "/(examples)/" } } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const data = useSidebar();

  const containerRef = useRef();

  function renderLink(link, label) {
    const isThemeBuilder = link.includes('theme-builder');
    return isExternalUrl(link) || isThemeBuilder ? (
      <ExternalLink
        style={{ paddingLeft: '10px !important' }}
        link={link}
        label={label}
      />
    ) : (
      <InternalLink
        style={{ paddingLeft: '10px !important' }}
        link={link}
        label={label}
      />
    );
  }

  useEffect(() => {
    function handleScroll(e) {
      const isBrowser = typeof window !== `undefined`;

      if (isBrowser) {
        setScrollPosition(e.target.scrollTop);
      }
    }

    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    const previousScrollPosition = sessionStorage.getItem('sidebar-scroll');

    // if there was a previous scroll position, restore it
    if (previousScrollPosition !== undefined) {
      containerRef.current.scrollTop = previousScrollPosition;
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition !== null) {
      sessionStorage.setItem('sidebar-scroll', scrollPosition);
    }
  }, [scrollPosition]);

  return (
    <Container ref={containerRef} isMenuOpen={isMenuOpen}>
      <LogoContainer
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          minHeight: 'initial',
          maxHeight: 'initial',
          height: 'initial',
        }}
      >
        <Link to={basePath} style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map(item => {
                return (
                  <CustomItem key={item.link}>
                    {renderLink(item.link, item.label)}
                  </CustomItem>
                );
              });

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <CustomItem key={id}>{renderLink(link, label)}</CustomItem>;
          })}
          <ListWithSubItems text="Components">
            {components.edges.map(({ node: { id, fields, frontmatter } }) => {
              if (!frontmatter.title) {
                console.warn(`Missing title for file at ${fields.slug}`);
              }

              return (
                <CustomItem key={id}>
                  {renderLink(fields.slug, frontmatter.title)}
                </CustomItem>
              );
            })}
          </ListWithSubItems>
          <ListWithSubItems text="Examples">
            {examples.edges.map(({ node: { id, fields, frontmatter } }) => {
              if (!frontmatter.title) {
                console.warn(`Missing title for file at ${fields.slug}`);
              }

              return (
                <CustomItem key={id}>
                  {renderLink(fields.slug, frontmatter.title)}
                </CustomItem>
              );
            })}
          </ListWithSubItems>
        </List>
      </nav>
      <footer>
        <p>{footer}</p>
      </footer>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
