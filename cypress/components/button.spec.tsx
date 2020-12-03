/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Button, ThemeProvider } from '../../dist/minerva-ui.esm';

const text = 'Button';

describe('<Button />', () => {
  it('renders and shows inner text', () => {
    mount(<Button>{text}</Button>);

    cy.contains(text).should('be.visible');

    cy.get('button').toMatchImageSnapshot();
  });

  it('renders with a theme provider', () => {
    mount(
      <ThemeProvider>
        <Button>{text}</Button>
      </ThemeProvider>
    );

    cy.contains(text).should('be.visible');
    cy.get('button').toMatchImageSnapshot();
  });
});
