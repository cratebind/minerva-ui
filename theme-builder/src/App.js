import React from 'react';
import {
  ThemeProvider,
  GlobalStyles,
  Box,
  Flex,
  Button,
  Input,
  Checkbox,
  Link,
  Select,
  Table,
  Text,
  styled,
  defaultTheme,
} from 'minerva-ui';
import Editor from './components/Editor';
import { useAppContext } from './AppContext';
import Inspector from './components/Inspector';
import ThemeModal from './components/ThemeModal';

export const Components = {
  Button,
  Input,
  Checkbox,
  Link,
  Select,
  Table,
  Text,
};

const ComponentButton = styled(Button)`
  border-width: 0;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  background-color: transparent;
  color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const HEADER_HEIGHT = '48px';

function App() {
  const { state, setContext } = useAppContext();

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Box height="100vh" width="100%">
        <Flex
          height={HEADER_HEIGHT}
          alignItems="center"
          px="16px"
          justifyContent="space-between"
          bg="#252f3f"
        >
          <Text fontSize="20px" fontWeight={800} color="#fff">
            System Builder
          </Text>
          <Button border="0" onClick={() => setContext({ modalOpen: true })}>
            Export Theme
          </Button>
        </Flex>
        <Flex height={`calc(100vh - ${HEADER_HEIGHT})`}>
          <Flex flexDirection="column" padding={4} width="15rem" bg="#3b4c67">
            {Object.keys(Components).map(componentName => (
              <ComponentButton
                key={componentName}
                onClick={() => setContext({ activeComponent: componentName })}
              >
                {componentName}
              </ComponentButton>
            ))}
          </Flex>
          {/* editor has its own theme provider separate from rest of app */}
          <ThemeProvider
            theme={{
              ...defaultTheme,
              Button: {
                container: {
                  ...defaultTheme.Button.container,
                  ...state.Button,
                },
              },
            }}
          >
            <Editor />
            <Inspector />
          </ThemeProvider>
        </Flex>
        <ThemeModal />
      </Box>
    </ThemeProvider>
  );
}

export default App;
