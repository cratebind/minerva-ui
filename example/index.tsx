import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Button, ThemeProvider, defaultTheme } from '../src';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    min-height: 100%;
  }

  label {
    text-transform: capitalize;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Sidebar = styled(Flex)`
  width: 240px;
  padding: 8px 0;
`;

const SidebarContent = styled.div`
  padding: 0 16px;
`;

const initialStyles = {
  ...defaultTheme,
  Button: {
    backgroundColor: 'rgb(49, 151, 149)',
    borderRadius: 4,
    height: 34,
    fontSize: 16,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0,
    },
    lineHeight: {
      unit: 'AUTO',
    },
    fontWeight: 'regular',
    // container: {
    // },
    // text: {
    // },
  },
  Text: {
    fontSize: 16,
    lineHeight: '19px',
    // opacity: 1,
    color: 'rgb(148, 148, 148)',
  },
};

const Field = styled.label`
  display: flex;
`;

function toWords(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

const App = () => {
  const [styles, setStyles] = useState(initialStyles);

  // console.log({ styles });
  return (
    <ThemeProvider theme={styles}>
      <Flex style={{ height: '100vh' }}>
        <GlobalStyle />
        <Sidebar style={{ borderRight: '1px solid #e5e5e5' }}>
          <SidebarContent>Button</SidebarContent>
        </Sidebar>
        <Flex style={{ backgroundColor: 'rgb(229, 229, 229)', flex: 1 }}>
          <Button>Button</Button>
        </Flex>
        <Sidebar>
          <SidebarContent>
            {Object.entries(styles).map(([key, componentStyles]) => {
              if (key === 'Button') {
                return (
                  <div>
                    {Object.entries(componentStyles).map(
                      ([styleKey, value]) => {
                        return (
                          <Field>
                            <div>{toWords(styleKey)}:</div>
                            <input
                              type="text"
                              value={value}
                              onChange={e => {
                                const newStyles = { ...styles };
                                newStyles.Button[styleKey] = e.target.value;
                                setStyles(newStyles);
                              }}
                            />
                          </Field>
                        );
                      }
                    )}
                  </div>
                );
              }
            })}
          </SidebarContent>
        </Sidebar>
      </Flex>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
