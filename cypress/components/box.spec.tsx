import * as React from 'react';
import { Box } from '../../dist/minerva-ui.esm';
import { mount } from '@cypress/react';

const styles = {
  backgroundColor: 'rgb(51, 51, 51)',
  color: 'rgb(255, 255, 255)',
  padding: '10px',
  borderRadius: '8px',
};

const toKebabCase = string => {
  return string.replace(/([\da-z]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

describe('<Box />', () => {
  it('renders text children', () => {
    mount(<Box {...styles}>This is a component</Box>);

    cy.contains('This is a component');

    Object.entries(styles).forEach(([key, value]) => {
      cy.get('div > div').should('have.css', toKebabCase(key), value);
    });
  });
});
