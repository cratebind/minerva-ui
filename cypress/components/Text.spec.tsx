import React from 'react';
import { mount } from '@cypress/react';
import { Text } from '../../src/Text';

it('renders children as text', () => {
  const text = 'Text';
  mount(<Text id="target">{text}</Text>);
  cy.get('#target').contains(text);
});
