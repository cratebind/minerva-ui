import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from '.';
import { Box } from '../layout';

export default {
  title: 'Accordion',
  component: Accordion,
  subcomponents: {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
  },
};

export const Basic = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionButton>
          <Box>Section 1 title</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box>Section 2 title</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem disabled>
        <AccordionButton>
          <Box>Section 3 (disabled)</Box>
          <AccordionIcon />
        </AccordionButton>
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

export const MultipleAndCollapsible = () => (
  <Accordion multiple collapsible>
    <AccordionItem>
      <AccordionButton>
        <Box>Section 1 title</Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Box>Section 2 title</Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton>
        <Box>Section 3 title</Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
