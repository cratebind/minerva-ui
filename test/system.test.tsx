import React, { useRef, useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  Button,
  Checkbox,
  // Heading,
  // Input,
  // Link,
  // PseudoBox,
  // Table,
  // Text,
  // Box,
  // Select,
  // Flex,
  // Block,
} from '../src';
import { ThemeProvider } from '../src';

const components = {
  Button,
  Checkbox,
  // Heading,
  // Input,
  // Link,
  // PseudoBox,
  // Table,
  // Select,
  // Text,
  // Box,
  // Flex,
  // Block,
};

/**
 * All basic components should be able to pass down styles properly
 */
Object.entries(components).forEach(([name, Component]) => {
  describe(`<${name} />`, () => {
    it('should render', () => {
      const { container } = render(
        <ThemeProvider>
          <Component>Test</Component>
        </ThemeProvider>
      );
      expect(container).toMatchSnapshot();
    });

    it('should pass basic style props', () => {
      const color = '#e3e3e3';
      const { getByTestId } = render(
        <ThemeProvider>
          <Component data-testid={name} color={color}>
            Grey Text Component
          </Component>
        </ThemeProvider>
      );

      expect(getByTestId(name)).toHaveStyleRule('color', color);
    });

    it('should forward ref', () => {
      // console.log(`COMPONENT: ${name}`);
      const refContent = 'Ref Content';
      const RefComp = () => {
        const [text, setText] = useState('');
        const ref = useRef<any | null>();

        useEffect(() => {
          if (ref && ref.current) {
            setText(ref.current.textContent);
          }
          // setText
          // console.log(ref);
        }, [ref]);

        return (
          <ThemeProvider>
            <Component ref={ref} data-testid={name}>
              {refContent}
            </Component>
            <div data-testid="ref-content">{text}</div>
          </ThemeProvider>
        );
      };

      const { getByTestId } = render(<RefComp />);

      expect(getByTestId('ref-content')).toHaveTextContent(refContent);
    });

    it('should pass shorthand props', () => {
      const backgroundColor = '#e3e3e3';
      const { getByTestId } = render(
        <ThemeProvider>
          <Component data-testid={name} bg={backgroundColor}>
            Disabled Component
          </Component>
        </ThemeProvider>
      );

      const button = getByTestId(name);

      expect(button).toHaveStyleRule('background-color', backgroundColor);
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
