import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import PropTypes from 'prop-types';
import theme from 'prism-react-renderer/themes/dracula';
import { LiveProvider, LiveEditor } from 'react-live';
import styled from '@emotion/styled';
import { mdx } from '@mdx-js/react';
import * as Minerva from 'minerva-ui';

import { copyToClipboard } from '@rocketseat/gatsby-theme-docs/src/util/copy-to-clipboard.js';
import {
  CopyCode,
  LineNo,
  Pre,
  PreHeader,
  LiveWrapper,
  LivePreview,
  LiveError,
  StyledEditor,
} from '@rocketseat/gatsby-theme-docs/src/components/Code/styles';

const CustomCopyCode = ({ style, ...props }) => (
  <CopyCode
    style={{
      zIndex: 50,
      backgroundColor: '#fff',
      padding: '4px 8px',
      color: '#333',
      ...style,
    }}
    {...props}
  />
);

const CustomStyledEditor = styled(StyledEditor)`
  textarea,
  pre {
    white-space: pre !important;
  }
`;

export default function CodeHighlight({
  children,
  className,
  live,
  title,
  lineNumbers,
  noInline,
}) {
  const [copied, setCopied] = useState(false);
  const codeString = children.trim();
  const language = className.replace(/language-/, '');

  const handleClick = () => {
    setCopied(true);
    copyToClipboard(codeString);
  };

  if (live) {
    return (
      <LiveProvider
        code={codeString}
        noInline={noInline}
        theme={theme}
        transformCode={code => `/** @jsx mdx */${code}`}
        scope={{
          mdx,
          ...Minerva,
        }}
      >
        <LiveWrapper
          style={{
            flexDirection: 'column',
            boxShadow: 'none',
            marginBottom: '32px',
          }}
        >
          <LivePreview
            style={{
              padding: '12px',
              border: '1px solid rgb(226, 232, 240)',
              borderRadius: '4px',
              width: '100%',
              maxWidth: '100%',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              whiteSpace: 'normal',
            }}
          />
          <CustomStyledEditor
            style={{
              height: 'auto',
              width: '100%',
              maxWidth: '100%',
              maxHeight: '600px',
              marginTop: '16px',
              borderRadius: '4px',
              position: 'relative',
            }}
          >
            <CustomCopyCode onClick={handleClick}>
              {copied ? 'Copied!' : 'Copy'}
            </CustomCopyCode>
            <LiveEditor
              style={{ overflow: 'auto', height: 'auto', whiteSpace: 'pre' }}
            />
          </CustomStyledEditor>
        </LiveWrapper>

        <LiveError />
      </LiveProvider>
    );
  }

  return (
    <>
      {title && <PreHeader>{title}</PreHeader>}
      <div className="gatsby-highlight" style={{ marginBottom: '32px' }}>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
        >
          {({
            className: blockClassName,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <Pre
              className={blockClassName}
              style={{ ...style, whiteSpace: 'pre' }}
              hasTitle={title}
            >
              <CustomCopyCode onClick={handleClick}>
                {copied ? 'Copied!' : 'Copy'}
              </CustomCopyCode>
              <code>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {lineNumbers && <LineNo>{i + 1}</LineNo>}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </Pre>
          )}
        </Highlight>
      </div>
    </>
  );
}

CodeHighlight.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  live: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.string,
  lineNumbers: PropTypes.string,
};

CodeHighlight.defaultProps = {
  live: false,
  title: null,
  lineNumbers: null,
};
