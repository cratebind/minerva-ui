import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import slugify from '@sindresorhus/slugify';
import Link from 'next/link';
import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';
import * as Minerva from 'minerva-ui';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Copy from '../../components/CopyButton';
import { CustomThemeProvider } from '../../pages/_app';

const THEME: PrismTheme = {
  plain: {
    color: '#000',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['keyword'],
      style: {
        color: '#ff0078',
        fontWeight: 'bold',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#999',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url', 'attr-value'],
      style: {
        color: '#028265',
      },
    },
    {
      types: ['variable', 'language-javascript'],
      style: {
        color: '#c6c5fe',
      },
    },
    {
      types: ['builtin', 'char', 'constant'],
      style: {
        color: '#000',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#d9931e',
        fontStyle: 'normal',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#333',
      },
    },
    {
      types: ['number', 'function', 'tag'],
      style: {
        color: '#0076ff',
      },
    },
    {
      types: ['boolean', 'regex'],
      style: {
        color: '#d9931e',
      },
    },
  ],
};

// Anchor links

const HeaderLink = ({ tag: Tag, children, ...props }) => {
  const title =
    typeof children === 'string' ? children : children?.props?.children;
  const slug = slugify(title || '');
  return (
    <Tag {...props}>
      <span className="subheading-anchor" id={slug} />
      <a href={'#' + slug} className="text-current no-underline no-outline">
        {children}
        <span className="anchor-icon" aria-hidden>
          #
        </span>
      </a>
    </Tag>
  );
};

const H2 = ({ children, ...props }) => {
  return (
    <HeaderLink tag="h2" {...props}>
      {children}
    </HeaderLink>
  );
};

const H3 = ({ children, ...props }) => {
  return (
    <HeaderLink tag="h3" {...props}>
      {children}
    </HeaderLink>
  );
};

const H4 = ({ children, ...props }) => {
  return (
    <HeaderLink tag="h4" {...props}>
      {children}
    </HeaderLink>
  );
};

const H5 = ({ children, ...props }) => {
  return (
    <HeaderLink tag="h5" {...props}>
      {children}
    </HeaderLink>
  );
};

const H6 = ({ children, ...props }) => {
  return (
    <HeaderLink tag="h6" {...props}>
      {children}
    </HeaderLink>
  );
};

const A = ({ children, ...props }) => {
  const isExternal = props.href && props.href.startsWith('https://');
  if (isExternal) {
    return (
      <a target="_blank" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={props.href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const scope = {
  ...Minerva,
  themeWithIcons: { ...Minerva.defaultTheme, icons: Minerva.defaultIcons },
  useState: React.useState,
  useEffect: React.useEffect,
};

export const Code = ({ children, className, highlight, live, ...props }) => {
  if (!className) return <code {...props}>{children}</code>;

  const highlightedLines = highlight
    ? highlight.split(',').map(x => Number(x))
    : [];

  // https://mdxjs.com/guides/syntax-highlighting#all-together
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <CustomThemeProvider>
        <LiveProvider code={children} theme={THEME} scope={scope} {...props}>
          {/* {props.showCopyButton && <Copy content={props.code} />} */}
          <Minerva.Box
            bg="white"
            margin="-16px -16px 16px -16px"
            borderWidth="1px"
            fontFamily="body"
            borderBottomWidth={0}
            radiusTop="8px"
          >
            <Minerva.Box p="12px">
              <LivePreview data-name="live-preview" />
            </Minerva.Box>
          </Minerva.Box>
          <LiveEditor
            data-name="live-editor"
            style={{
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
          <LiveError />
        </LiveProvider>
      </CustomThemeProvider>
    );
  }

  return (
    <>
      <CustomThemeProvider>
        <Copy content={children.trim()} />
        <Highlight
          {...defaultProps}
          code={children.trim()}
          language={language}
          theme={THEME}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <code
              className={className}
              style={{ ...style, position: 'relative' }}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  style={
                    highlightedLines.includes(i + 1)
                      ? {
                          background: '#cce0f5',
                          margin: '0 -1rem',
                          padding: '0 1rem',
                        }
                      : null
                  }
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          )}
        </Highlight>
      </CustomThemeProvider>
    </>
  );
};

const components = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: A,
  code: Code,
  th: props => (
    <th
      className="px-6 py-3 whitespace-no-wrap bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
      {...props}
      style={{ backgroundColor: 'rgb(249,250,251)' }}
    />
  ),
  td: props => <td className="px-6 py-4" {...props} />,
  thead: props => <thead className="rounded-lg" {...props} />,
  tbody: props => (
    <tbody className="bg-white divide-y divide-gray-200" {...props} />
  ),
  table: props => (
    <div className="overflow-x-auto mt-2">
      <div className="py-2 px-1 align-middle inline-block min-w-full">
        <div className="overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200" {...props} />
        </div>
      </div>
    </div>
  ),
};

const Theme = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default Theme;
