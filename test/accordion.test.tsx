import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  ThemeProvider,
} from '../src';

const ExampleAccordion = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionButton>Section 1 title</AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Section 2 title</AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

describe('<Accordion />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <ExampleAccordion />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should display content', () => {
    const title = 'Section 1 title';
    const { container } = render(
      <ThemeProvider>
        <ExampleAccordion />
      </ThemeProvider>
    );

    expect(container).toHaveTextContent(title);
  });
});
