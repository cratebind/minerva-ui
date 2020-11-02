import React, { useRef, useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
  Button,
  Checkbox,
  Heading,
  Input,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  InputField,
  Link,
  PseudoBox,
  Block,
  Flex,
  Box,
  ModalBody,
  Text,
  // Table,
  Select,
  Tag,
  Image,
  Icon,
  Radio,
  Switch,
  Alert,
  ModalHeader,
  ModalFooter,
  Tab,
  Tabs,
  // Tooltip,
  // Skeleton,
  defaultTheme,
  defaultIcons,
} from '../src';
import { ThemeProvider } from '../src';
expect.extend(toHaveNoViolations);

const basicComponents = {
  Button,
  Checkbox,
  Heading,
  Input,
  Link,
  PseudoBox,
  Block,
  Flex,
  Box,
  Text,
  Tag,
  Image,
  Alert,
  Switch,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tab,
  // Skeleton,
  // Radio,
  // Icon,
  // Table,
  // Select,
};

// const childrenValidationComponents = {
//   Table,
//   Select,
// };

const allComponents = { ...basicComponents };

const themeWithIcons = {
  ...defaultTheme,
  icons: defaultIcons,
};

// one giant component that renders all library components
const KitchenSink = () => {
  return (
    <Box>
      <Button>Button</Button>
      <Checkbox>Checkbox</Checkbox>
      <Heading>Heading</Heading>
      <InputField label="Label">
        <Input
          placeholder="Basic Input"
          value="value"
          onChange={() => {}}
          id="label"
        />
      </InputField>
      <Link>Link</Link>
      <Block>Block</Block>
      <Flex>Flex</Flex>
      <Text>Text</Text>
      <Tag>Tag</Tag>
      <Image alt="img alt text" />
      <Alert status="error" />
    </Box>
  );
};

describe('Accessibility', () => {
  it('all components should pass basic accessibility checks', async () => {
    const { container } = render(
      <ThemeProvider theme={themeWithIcons}>
        <KitchenSink />
      </ThemeProvider>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

/**
 * All basic basicComponents should be able to pass down styles properly
 */
Object.entries(allComponents).forEach(([name, Component]) => {
  describe(`<${name} />`, () => {
    it('should render', () => {
      const testId = `component-${name}`;
      const { getByTestId } = render(
        <ThemeProvider theme={themeWithIcons}>
          <Component data-testid={testId} />
        </ThemeProvider>
      );
      expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('should pass basic style props', () => {
      const color = '#e3e3e3';
      const { getByTestId } = render(
        <ThemeProvider theme={themeWithIcons}>
          <Component data-testid={name} color={color} />
        </ThemeProvider>
      );

      expect(getByTestId(name)).toHaveStyleRule('color', color);
    });

    it('should forward ref', () => {
      const refId = 'ref-id';
      const RefComp = () => {
        const [id, setId] = useState('');
        const ref = useRef<any | null>();

        useEffect(() => {
          if (ref && ref.current) {
            setId(ref.current.dataset.testid);
          }
          // setId
          // console.log(ref);
        }, [ref]);

        return (
          <ThemeProvider theme={themeWithIcons}>
            <Component ref={ref} id={refId} data-testid={refId} />
            <div data-testid="ref-content">{id}</div>
          </ThemeProvider>
        );
      };

      const { getByTestId } = render(<RefComp />);

      expect(getByTestId('ref-content')).toHaveTextContent(refId);
    });

    it('should pass shorthand props', () => {
      const backgroundColor = '#e3e3e3';
      const { getByTestId } = render(
        <ThemeProvider theme={themeWithIcons}>
          <Component data-testid={name} bg={backgroundColor} />
        </ThemeProvider>
      );

      const component = getByTestId(name);

      expect(component).toHaveStyleRule('background-color', backgroundColor);
    });

    // it('should pass shorthand pseudo props', () => {
    //   const backgroundColor = '#e3e3e3';
    //   const { getByTestId } = render(
    //     <ThemeProvider>
    //       <Component
    //         data-testid={name}
    //         _disabled={{ backgroundColor }}
    //         disabled
    //       >
    //         Disabled Component
    //       </Component>
    //     </ThemeProvider>
    //   );

    //   const button = getByTestId(name);

    //   expect(button).toHaveStyleRule('background-color', backgroundColor, {
    //     modifier: ':disabled',
    //   });
    // });

    it('should not forward style props', () => {
      const width = '50px';
      const { getByTestId } = render(
        <ThemeProvider theme={themeWithIcons}>
          <Component data-testid={name} width={width} />
        </ThemeProvider>
      );

      const component = getByTestId(name);

      expect(component.getAttribute('width')).toBeNull();
      expect(component).toHaveStyleRule('width', width);
    });
  });
});

describe(`<Icon />`, () => {
  it('should render', () => {
    const testId = `component-icon`;
    const { getByTestId } = render(
      <ThemeProvider theme={themeWithIcons}>
        <Icon name="plus" data-testid={testId} />
      </ThemeProvider>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should pass basic style props', () => {
    const color = '#e3e3e3';
    const { getByTestId } = render(
      <ThemeProvider theme={themeWithIcons}>
        <Icon name="plus" data-testid="icon" size="36px" color={color} />
      </ThemeProvider>
    );

    expect(getByTestId('icon')).toHaveStyleRule('color', color);
    expect(getByTestId('icon')).toHaveStyleRule('height', '36px');
  });

  it('should return null and warn when passing an invalid name', () => {
    // Silence output when errors / warnings are expected
    console.warn = jest.fn();
    const spy = jest.spyOn(global.console, 'warn');
    const iconName = 'invalid-icon-name';

    const { queryByTestId } = render(
      <ThemeProvider theme={themeWithIcons}>
        <Icon name="invalid-icon-name" data-testid="icon" />
      </ThemeProvider>
    );

    expect(queryByTestId('icon')).not.toBeInTheDocument();
    expect(spy).toHaveBeenCalledWith(
      `Could not find icon in theme with name of ${iconName}`
    );
  });

  it('should pass shorthand props', () => {
    const backgroundColor = '#e3e3e3';
    const { getByTestId } = render(
      <ThemeProvider theme={themeWithIcons}>
        <Icon name="plus" data-testid="icon" bg={backgroundColor} />
      </ThemeProvider>
    );

    const component = getByTestId('icon');

    expect(component).toHaveStyleRule('background-color', backgroundColor);
  });
});

const THEMEABLE_COMPONENTS = {
  Button,
  Checkbox,
  Heading,
  Image,
  Input,
  InputField,
  Link,
  ModalHeader,
  ModalBody,
  ModalFooter,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Radio,
  Text,
  Select,
  Tag,
  Tabs,
  Tab,
  // TabList,
  // TabPanels,
  // TabPanel,
};

/**
 * Themeable components
 */
Object.entries(THEMEABLE_COMPONENTS).forEach(([name, Component]: any[]) => {
  describe(`<${name} />`, () => {
    it('should be style-able from theme', () => {
      const backgroundColor = '#e9e9e9';
      const customTheme = {
        ...defaultTheme,
        [name]: {
          backgroundColor,
        },
      };

      const { getByTestId } = render(
        <ThemeProvider theme={customTheme}>
          <Component data-testid={name} />
        </ThemeProvider>
      );

      const component = getByTestId(name);

      expect(component).toHaveStyleRule('background-color', backgroundColor);
    });

    it('should still render when theme has no custom styles', () => {
      const { getByTestId } = render(
        <ThemeProvider
          theme={{
            icons: defaultIcons,
          }}
        >
          <Component data-testid={name} />
        </ThemeProvider>
      );

      const component = getByTestId(name);
      expect(component).toBeInTheDocument();
    });
  });
});
