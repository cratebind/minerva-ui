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
  ModalHeader,
  ModalFooter,
  ModalBody,
  Stack,
  Text,
  Block,
  Radio,
  RadioGroup,
  styled,
  defaultTheme,
  Heading,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Tag,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  defaultIcons,
  // Heading,
} from 'minerva-ui';
import Editor from './Editor';
import { useAppContext } from './AppContext';
import Inspector from './Inspector';
import ThemeModal from './ThemeModal';
import UtilityTable from './UtilityTable';
import {
  ModalExample,
  CardExamples,
  FormExamples,
  TabsExample,
} from './examples';

const ColorTag = ({ number, code, ...props }: any) => (
  <Block
    borderRadius="9999px"
    height="48px"
    width="48px"
    boxShadow="0 10px 15px -3px rgba(195,218,254,0.3), 0 4px 6px -2px rgba(195,218,254,0.15)"
    // color={number > 500 ? '#fff' : '#000'}
    backgroundColor={code}
    {...props}
  />
);

function Colors(props) {
  const { state } = useAppContext();

  return (
    <Stack gap="20px">
      {Object.entries(state.colors).map(([color, value]) => {
        return (
          <Stack key={color}>
            <Heading textTransform="capitalize" fontSize="lg">
              {color}
            </Heading>
            {typeof value === 'string' ? (
              <UtilityTable
                themeProperty={{ [color]: value }}
                renderValue={({ property, value }) => (
                  <ColorTag
                    code={value}
                    color={
                      ['transparent', '#fff'].includes(value) ? '#000' : '#fff'
                    }
                  />
                )}
              />
            ) : (
              <UtilityTable
                themeProperty={Object.entries(value).reduce(
                  (result, [key, colorCode]) => {
                    result[`${color}.${key}`] = colorCode;
                    return result;
                  },
                  {}
                )}
                renderValue={({ property, value }) => (
                  <ColorTag code={value} number={property} />
                )}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
}

// export const ThemeConfig = {
//   colors: Colors,
// };

export const Components = {
  Button,
  Checkbox,
  Heading,
  Input,
  Link,
  Radio: props => (
    <RadioGroup value="1">
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
      <Radio value="4">Option 4</Radio>
    </RadioGroup>
  ),
  ModalHeader,
  ModalBody,
  ModalFooter,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Tab: props => <TabsExample tabProps={props} />,
  // Tabs: props => <TabsExample {...props} />,
  TabList: props => <TabsExample {...props} />,
  TabPanels: props => <TabsExample {...props} />,
  TabPanel: props => <TabsExample {...props} />,
  Select: props => (
    <Select {...props}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </Select>
  ),
  Table,
  Tag,
  Text,
};

export const Examples = {
  Modal: ModalExample,
  Cards: CardExamples,
  Forms: FormExamples,
};

const ComponentButton = styled(Button)`
  border-width: 0;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  background-color: transparent;
  color: #fff;
  text-transform: capitalize;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const HEADER_HEIGHT = '48px';

function ThemeBuilder() {
  const { state, setContext, resetTheme } = useAppContext();

  return (
    <ThemeProvider theme={{ ...defaultTheme, icons: defaultIcons }}>
      <GlobalStyles />
      <Box height="100vh" width="100%">
        <Flex
          height={HEADER_HEIGHT}
          alignItems="center"
          px="16px"
          justifyContent="space-between"
          bg="#252f3f"
        >
          <Flex alignItems="center">
            <Text fontSize="20px" margin={0} fontWeight={800} color="#fff">
              Theme Builder
            </Text>
            {/* <Button
              as="a"
              border={0}
              bg="transparent"
              color="white"
              ml={4}
              href="/docs/theming"
            >
              Back to Docs
            </Button> */}
          </Flex>
          <Stack horizontal>
            <Button
              border="0"
              onClick={() => {
                const resetConfirm = window.confirm(
                  'Are you sure you want to reset and lose all your theme styles?'
                );

                if (resetConfirm) {
                  resetTheme();
                }
              }}
            >
              Reset Theme
            </Button>
            <Button border="0" onClick={() => setContext({ modalOpen: true })}>
              Export Theme
            </Button>
          </Stack>
        </Flex>
        <Flex height={`calc(100vh - ${HEADER_HEIGHT})`}>
          <Flex flexDirection="column" padding={4} width="15rem" bg="#3b4c67">
            {/* <Heading as="h4" fontSize="16px" mb={2} color="white">
              Theme
            </Heading>
            {Object.keys(ThemeConfig).map(componentName => (
              <ComponentButton
                key={componentName}
                onClick={() => setContext({ activeComponent: componentName })}
              >
                {componentName}
              </ComponentButton>
            ))} */}
            <Heading as="h4" fontSize="16px" mb={2} color="white">
              Components
            </Heading>
            {Object.keys(Components).map(componentName => (
              <ComponentButton
                key={componentName}
                onClick={() => setContext({ activeComponent: componentName })}
                style={{
                  backgroundColor:
                    state?.activeComponent === componentName
                      ? ' rgba(0, 0, 0, 0.3)'
                      : 'transparent',
                }}
              >
                {componentName}
              </ComponentButton>
            ))}
            <Heading as="h4" fontSize="16px" mb={2} color="white">
              Examples
            </Heading>
            {Object.keys(Examples).map(componentName => (
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
              icons: defaultIcons,
              ...state,
              // Button: {
              //   ...defaultTheme.Button,
              //   // ...buttonStyles,
              // },
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
