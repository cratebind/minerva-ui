/* tslint:disable */

import React, { useState } from 'react';
// import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import * as Minerva from '.';
import useClipboard from './hooks/useClipboard';

const { Block } = Minerva;

export const liveEditorStyle = {
  fontSize: 14,
  // overflowX: "auto",
  fontFamily: 'Menlo,monospace',
  borderRadius: 10,
  // padding: 20,
};

const wrapperStyles = {
  backgroundColor: 'rgb(1, 22, 39)',
  borderRadius: '10px',
  padding: '20px',
  marginBottom: '32px',
  marginTop: '32px',
};

// @TODO: Figure out why "position: relative" causes TS error
const Wrapper = ({ children }) => (
  <Block {...wrapperStyles} style={{ position: 'relative' }}>
    {children}
  </Block>
);

// const highlightStyle = {
//   padding: 20,
//   fontSize: 14,
//   overflow: "auto",
//   lineHeight: "1.5",
//   fontFamily: "Menlo,monospace",
// };

export const liveErrorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  // overflowX: "auto",
  color: 'rgb(220, 53, 69)',
  backgroundColor: 'rgb(1,22,39)',
  borderRadius: 10,
  marginTop: '10px',
  // backgroundColor: 'red',
};

// const Box = ({ children, style }: any) => <div style={style}>{children}</div>

const previewStyles = {
  fontFamily:
    '-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
  border: '1px solid rgb(226, 232, 240)',
  borderRadius: 4,
  padding: 20,
};

const LiveCodePreview = (props: any) => (
  <div style={previewStyles}>
    <Minerva.ThemeProvider>
      <Minerva.GlobalStyles />
      <LivePreview {...props} />
    </Minerva.ThemeProvider>
  </div>
);

const CopyButton = (props: any) => (
  <Minerva.Button
    position="absolute"
    fontWeight="600"
    fontSize="12px"
    top="15px"
    padding="0 12px"
    textTransform="uppercase"
    fontFamily={`-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`}
    zIndex="1"
    right="1.25em"
    style={{
      textTransform: 'uppercase',
    }}
    {...props}
  />
);

const Provider = ({ children, ...props }) => (
  <Minerva.ThemeProvider>
    {/* <Minerva.GlobalStyles /> */}
    <LiveProvider {...props}>{children}</LiveProvider>
  </Minerva.ThemeProvider>
);

const CodeBlock = ({
  className,
  live = true,
  isManual,
  render,
  children,
  ...props
}: any) => {
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  const { onCopy, hasCopied } = useClipboard(editorCode);

  // const { colorMode } = useColorMode();
  const themes = {
    // light: lightTheme,
    dark: darkTheme,
  };
  const theme = themes['dark'];

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    // transformCode: code => "/** @jsx mdx */" + code,
    scope: {
      // ...ReactIcons,
      ...Minerva,
      mdx,
      // StarIcon,
      // FocusLock,
      // ChakraPortal,
    },
    noInline: isManual,
    ...props,
  };

  const handleCodeChange = (newCode: any) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
    return (
      <Provider {...liveProviderProps}>
        <LiveCodePreview />
        <Wrapper>
          <LiveEditor onChange={handleCodeChange} style={liveEditorStyle} />
          <CopyButton onClick={onCopy}>
            {hasCopied ? 'copied' : 'copy'}
          </CopyButton>
          {/* <EditableNotice /> */}
        </Wrapper>
        <LiveError style={liveErrorStyle} />
      </Provider>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <Provider {...liveProviderProps}>
          <LiveCodePreview />
        </Provider>
      </div>
    );
  }

  return (
    <Provider disabled {...liveProviderProps}>
      <Wrapper>
        <LiveEditor style={liveEditorStyle} />

        <CopyButton top="1.25em" onClick={onCopy}>
          {hasCopied ? 'copied' : 'copy'}
        </CopyButton>
      </Wrapper>
    </Provider>
  );
};

CodeBlock.defaultProps = {
  mountStylesheet: false,
};

export default CodeBlock;
