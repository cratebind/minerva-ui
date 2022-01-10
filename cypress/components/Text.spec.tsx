import React from 'react';
import { mount } from '@cypress/react';
import { Text } from '../../src/Text';

it('renders children as text', () => {
  const text = 'Text';
  mount(<Text id="target">{text}</Text>);
  cy.get('p').contains(text);
});

it('passes styles to <p> element', () => {
  const styles = {
    color: 'red',
    fontSize: '20px',
  };

  mount(<Text {...styles}>Text</Text>);

  cy.get('p').should('have.css', 'color', 'rgb(255, 0, 0)');
  cy.get('p').should('have.css', 'font-size', '20px');
});

it('renders different elements with "as" prop', () => {
  mount(<Text as="h1">Text</Text>);

  cy.get('h1').contains('Text');
});

it('allows styling through pseudo class prop _focus', () => {
  mount(
    <Text color="#fff" _hover={{ color: 'rgb(255, 0, 0)' }}>
      Text
    </Text>
  );

  cy.get('p')
    .realHover()
    .should('have.css', 'color', 'rgb(255, 0, 0)');
});
