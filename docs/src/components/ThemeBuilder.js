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
  // Heading,
} from 'minerva-ui';
import Editor from './Editor';
import { useAppContext } from './AppContext';
import Inspector from './Inspector';
import ThemeModal from './ThemeModal';

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

function ThemeBuilder() {
  const { state, setContext } = useAppContext();

  const { customProps, ...buttonStyles } = state.Button;

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
          <Flex>
            <Text fontSize="20px" margin={0} fontWeight={800} color="#fff">
              Theme Builder
            </Text>
            <Button
              as="a"
              border={0}
              bg="transparent"
              color="white"
              ml={4}
              href="/docs/theming"
            >
              Back to Docs
            </Button>
          </Flex>
          <Button border="0" onClick={() => setContext({ modalOpen: true })}>
            Export Theme
          </Button>
        </Flex>
        <Flex height={`calc(100vh - ${HEADER_HEIGHT})`}>
          <Flex flexDirection="column" padding={4} width="15rem" bg="#3b4c67">
            {/* <Heading as="h4" size="sm">
              ELEMENTS
            </Heading> */}
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
                ...defaultTheme.Button,
                ...buttonStyles,
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

export default ThemeBuilder;
