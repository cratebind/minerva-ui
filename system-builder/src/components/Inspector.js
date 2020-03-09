import React, { useContext, useState } from 'react';
import { Box, Flex, Input, defaultTheme } from 'minerva-ui';
import { ThemeContext } from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';
import { ChevronDown } from 'react-feather';

import { useAppContext } from '../AppContext';
import { toTitleCase } from '../utils';

import '@reach/accordion/styles.css';

const InnerContainer = props => <Box padding="10px" {...props} />;

const Title = props => (
  <Box fontSize="18px" fontWeight={600} p="10px" {...props} />
);

const fieldSections = {
  dimensions: [
    { name: 'width', type: 'text' },
    { name: 'height', type: 'text' },
    { name: 'borderRadius', type: 'text ' },
  ],
  layout: [
    { name: 'paddingTop', type: 'text' },
    { name: 'paddingRight', type: 'text' },
    { name: 'paddingBottom', type: 'text ' },
    { name: 'paddingLeft', type: 'text ' },
  ],
};

const FieldHeading = props => (
  <Flex
    px="12px"
    py="8px"
    bg="rgb(247, 250, 252)"
    width="100%"
    textAlign="left"
    justifyContent="space-between"
    {...props}
  />
);

const DropdownArrow = ({ active }) => (
  <Box
    style={{
      transform: `rotate(${active ? -180 : 0}deg)`,
      transition: '180ms all ease',
    }}
  >
    <ChevronDown />
  </Box>
);

export default function Inspector() {
  const { state } = useAppContext();
  const themeContext = useContext(ThemeContext);
  const [activeSections, setActiveSections] = useState(
    Object.keys(fieldSections).map((_, index) => index)
  );

  function toggleItem(toggledIndex) {
    if (activeSections.includes(toggledIndex)) {
      setActiveSections(
        activeSections.filter(currentIndex => currentIndex !== toggledIndex)
      );
    } else {
      setActiveSections([...activeSections, toggledIndex].sort());
    }
  }

  const activeComponent = state?.activeComponent;

  // const Component = activeComponent ? Components[activeComponent] : null;

  const componentProps = state[activeComponent];
  // const componentStyles =

  console.log({ themeContext });

  return (
    <Flex
      flex="0 0 20rem"
      flexDirection="column"
      borderLeft="1px solid #cad5de"
      overflow="auto"
      height="100%"
    >
      <Title>{activeComponent}</Title>
      <Accordion
        collapsible
        multiple
        // defaultIndex={Object.keys(fieldSections).map((_, index) => index)}
        index={activeSections}
        onChange={toggleItem}
      >
        {Object.entries(fieldSections).map(([section, fields], index) => (
          <AccordionItem>
            <FieldHeading as={AccordionButton}>
              {toTitleCase(section)}
              <DropdownArrow active={activeSections.includes(index)} />
            </FieldHeading>
            {/* <AccordionButton>Step 1: Do a thing</AccordionButton> */}
            <AccordionPanel>
              {fields.map(({ name, type }) => (
                <InnerContainer>
                  <InspectorField
                    key={name}
                    name={name}
                    value={themeContext.Button.container[name]}
                    componentProps={componentProps}
                    activeComponent={activeComponent}
                  />
                </InnerContainer>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {/* {dimensions.map(({ name, type }) => (
        <>
          <InnerContainer>
            <InspectorField
              key={name}
              name={name}
              value={themeContext.Button.container[name]}
              componentProps={componentProps}
              activeComponent={activeComponent}
            />
          </InnerContainer>
        </>
      ))} */}
      {/* {Object.entries(themeContext.Button.container).map(([key, value]) => (
          <InspectorField
            key={key}
            name={key}
            value={value}
            componentProps={componentProps}
            activeComponent={activeComponent}
          />
        ))} */}
    </Flex>
  );
}

function InspectorField({ name, value, componentProps, activeComponent }) {
  const { state, setContext } = useAppContext();
  return (
    <Flex
      alignItems="center"
      // as="form"
      mb="12px" // onSubmit={e => {
      //   e.preventDefault();
      // }}
    >
      <Box as="label" width="100%" textTransform="capitalize">
        {toTitleCase(name)}
      </Box>
      <Input
        value={value}
        onChange={e =>
          setContext({
            [activeComponent]: { ...componentProps, [name]: e.target.value },
          })
        }
      />
    </Flex>
  );
}
