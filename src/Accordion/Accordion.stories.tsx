import { userEvent, within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';
import React from 'react';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '.';

export default {
  title: 'Accordion',
  component: Accordion,
  subcomponents: {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
  },
};

const BasicTemplate = () => {
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
      <AccordionItem disabled>
        <AccordionButton>Section 3 (disabled)</AccordionButton>
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

export const Basic = BasicTemplate.bind({});
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText('Section 1 title'));
  await canvas.findAllByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  )[0];
  await userEvent.click(canvas.getByText('Section 2 title'));
  await canvas.findAllByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  )[1];
  await userEvent.click(canvas.getByText('Section 3 (disabled)'));
};

const MultipleAndCollapsibleTemplate = () => (
  <Accordion multiple collapsible>
    <AccordionItem>
      <AccordionButton>Section 1 title</AccordionButton>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>Section 2 title</AccordionButton>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>Section 3 title</AccordionButton>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export const MultipleAndCollapsible = MultipleAndCollapsibleTemplate.bind({});
MultipleAndCollapsible.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText('Section 1 title'));
  await canvas.findAllByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  )[0];
  await userEvent.click(canvas.getByText('Section 2 title'));
  await canvas.findAllByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  )[1];
  await userEvent.click(canvas.getByText('Section 3 title'));
  await canvas.findAllByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  )[2];
};
