/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import faker from 'faker';
import { Button, ThemeProvider } from '../../dist/minerva-ui.esm';

describe('<Button />', () => {
  it('renders and shows inner text', () => {
    const text: string = faker.hacker.verb();
    mount(<Button>{text}</Button>);

    cy.contains(text).should('be.visible');

    cy.document().toMatchImageSnapshot();
  });

  it('renders with a theme provider', () => {
    const text: string = faker.hacker.verb();
    mount(
      <ThemeProvider>
        <Button>{text}</Button>
      </ThemeProvider>
    );

    cy.contains(text).should('be.visible');
    cy.document().toMatchImageSnapshot();
  });
});
