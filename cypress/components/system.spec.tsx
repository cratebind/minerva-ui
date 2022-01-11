import React, { useRef, useEffect, useState } from 'react';
import { mount } from '@cypress/react';
import {
  Alert,
  Block,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
} from '../../src';
// import { Text } from '../../src/Text';
// import { Box } from '../../src/layout';

const basicComponents = {
  Alert,
  Block,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
} as const;

/**
 * Tests to check shared functionality between all components
 */

Object.entries(basicComponents).forEach(([componentName, Component]) => {
  describe(`<${componentName} /> component`, () => {
    const children = 'Component Text';

    it('should render children', () => {
      mount(<Component id="target">{children}</Component>);
      cy.get('#target').should('have.text', children);
    });

    // should pass style props
    it('should pass style props', () => {
      const color = 'rgb(255, 0, 0)';
      mount(
        <Component id="target" color={color}>
          {children}
        </Component>
      );
      cy.get('#target').should('have.css', 'color', color);
    });

    // should forward ref

    // should pass shorthand prop

    // should allow "as" prop to render different elements

    // should not forward style props to element
  });
});
