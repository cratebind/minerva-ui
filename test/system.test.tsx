import React, { useRef, useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
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
  Table,
  Select,
  Tag,
  Image,
  Icon,
  Alert,
  Modal,
} from '../src';
import { ThemeProvider } from '../src';

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
  Modal,
  // Icon,
  // Table,
  // Select,
};

const childrenValidationComponents = {
  Table,
  Select,
};

const allComponents = { ...basicComponents, ...childrenValidationComponents };

/**
 * All basic basicComponents should be able to pass down styles properly
 */
Object.entries(allComponents).forEach(([name, Component]) => {
  describe(`<${name} />`, () => {
    it('should render', () => {
      const testId = `component-${name}`;
      const { getByTestId } = render(
        <ThemeProvider>
          <Component data-testid={testId} />
        </ThemeProvider>
      );
      expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('should pass basic style props', () => {
      const color = '#e3e3e3';
      const { getByTestId } = render(
        <ThemeProvider>
          <Component data-testid={name} color={color} />
        </ThemeProvider>
      );

      expect(getByTestId(name)).toHaveStyleRule('color', color);
    });

    it('should forward ref', () => {
      // console.log(`COMPONENT: ${name}`);
      const refId = 'ref-id';
      const RefComp = () => {
        const [id, setId] = useState('');
        const ref = useRef<any | null>();

        useEffect(() => {
          if (ref && ref.current) {
            setId(ref.current.id);
          }
          // setId
          // console.log(ref);
        }, [ref]);

        return (
          <ThemeProvider>
            <Component ref={ref} id={refId} data-testid={name} />
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
        <ThemeProvider>
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
  });
});

describe(`<Icon />`, () => {
  it('should render', () => {
    const testId = `component-icon`;
    const { getByTestId } = render(
      <ThemeProvider>
        <Icon name="plus" data-testid={testId} />
      </ThemeProvider>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should pass basic style props', () => {
    const color = '#e3e3e3';
    const { getByTestId } = render(
      <ThemeProvider>
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
      <ThemeProvider>
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
      <ThemeProvider>
        <Icon name="plus" data-testid="icon" bg={backgroundColor} />
      </ThemeProvider>
    );

    const component = getByTestId('icon');

    expect(component).toHaveStyleRule('background-color', backgroundColor);
  });
});
