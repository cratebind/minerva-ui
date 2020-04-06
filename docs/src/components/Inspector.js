import React, { useState } from 'react';
import { Box, Flex, Input, useTheme } from 'minerva-ui';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';
import { ChevronDown } from 'react-feather';
import { BlockPicker } from 'react-color';

// import 'react-color-picker/index.css';

import { useAppContext } from './AppContext';
import { toTitleCase } from './utils';

import '@reach/accordion/styles.css';
import { Components } from './ThemeBuilder';

const InnerContainer = props => <Box pt="10px" px="10px" {...props} />;

const Title = props => (
  <Box fontSize="18px" fontWeight={600} p="10px" {...props} />
);

const FieldHeading = props => (
  <Box
    display="flex"
    px="12px"
    py="8px"
    // mb="10px"
    // bg="rgb(247, 250, 252)"
    bg="#3b4c67"
    color="white"
    width="100%"
    textAlign="left"
    justifyContent="space-between"
    {...props}
  />
);

const fieldSections = {
  dimensions: [
    { name: 'width', type: 'text' },
    { name: 'height', type: 'text' },
    { name: 'borderRadius', type: 'text' },
  ],
  layout: [
    { name: 'fontFamily', type: 'text' },
    { name: 'paddingTop', type: 'text' },
    { name: 'paddingRight', type: 'text' },
    { name: 'paddingBottom', type: 'text' },
    { name: 'paddingLeft', type: 'text' },
  ],
  border: [
    { name: 'borderColor', type: 'color' },
    { name: 'borderWidth', type: 'text' },
    // { name: 'borderColor', type: 'color' },
  ],
  colors: [
    { name: 'backgroundColor', type: 'color' },
    { name: 'color', type: 'color' },
  ],
};

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

const fieldSectionCount = Object.keys(fieldSections).length + 1;

const Inspector = React.memo(function Inspector() {
  const { state, setContext } = useAppContext();
  const themeContext = useTheme();

  const [activeSections, setActiveSections] = useState([
    ...new Array(fieldSectionCount).fill().map((_, index) => index),
  ]);

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

  const componentProps = state[activeComponent];

  return (
    <Flex
      flex="0 0 25rem"
      flexDirection="column"
      borderLeft="1px solid #cad5de"
      overflow="auto"
      height="100%"
    >
      <Title>{activeComponent}</Title>
      <Accordion index={activeSections} onChange={toggleItem}>
        <AccordionItem>
          <FieldHeading as={AccordionButton}>
            Custom Properties
            <DropdownArrow active={activeSections.includes(0)} />
          </FieldHeading>
          <AccordionPanel>
            <InnerContainer>
              {state?.[activeComponent]?.customProps &&
                Object.entries(state[activeComponent].customProps).map(
                  ([key, value]) => (
                    <InspectorField
                      key={key}
                      name={key}
                      value={value}
                      type="text"
                      componentProps={componentProps}
                      activeComponent={activeComponent}
                      onChange={e =>
                        setContext({
                          [activeComponent]: {
                            ...componentProps,
                            customProps: {
                              ...state[activeComponent].customProps,
                              [key]: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  )
                )}
            </InnerContainer>
          </AccordionPanel>
        </AccordionItem>

        {/* for components, show a fixed set of properties */}
        {Object.keys(Components).includes(activeComponent) ? (
          Object.entries(fieldSections).map(([section, fields], index) => (
            <AccordionItem key={section}>
              <FieldHeading as={AccordionButton}>
                {toTitleCase(section)}
                <DropdownArrow active={activeSections.includes(index + 1)} />
              </FieldHeading>
              <AccordionPanel>
                {fields.map(({ name, type }) => (
                  <InnerContainer>
                    <InspectorField
                      key={name}
                      name={name}
                      type={type}
                      value={state[activeComponent][name]}
                      activeComponent={activeComponent}
                      onChange={e =>
                        setContext({
                          [activeComponent]: {
                            ...componentProps,
                            [name]: e.target.value,
                          },
                        })
                      }
                    />
                  </InnerContainer>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))
        ) : (
          <>
            {/* for a "config" option, map over all the values recursively */}
            <AccordionItem>
              <FieldHeading as={AccordionButton}>
                Key
                <DropdownArrow
                // active={activeSections.includes(index + 1)}
                />
              </FieldHeading>
              <AccordionPanel>
                <InnerContainer>
                  {Object.entries(state[activeComponent]).map(
                    ([key, value]) => {
                      return (
                        typeof value === 'string' && (
                          <InspectorField
                            name={key}
                            type="color"
                            value={state[activeComponent][key]}
                            activeComponent={activeComponent}
                            onChange={e => {
                              setContext({
                                [activeComponent]: {
                                  ...componentProps,
                                  [key]: e.target.value,
                                },
                              });
                            }}
                          />
                        )
                      );
                    }
                  )}
                </InnerContainer>
              </AccordionPanel>
              {/* {typeof value !== 'string' && (
                    <AccordionPanel>
                      {Object.entries(value).map(([nestedKey, nestedValue]) => (
                        <InnerContainer>
                          <InspectorField
                            name={nestedKey}
                            type="color"
                            value={state[activeComponent][key][nestedKey]}
                            activeComponent={activeComponent}
                            onChange={e => {
                              setContext({
                                [activeComponent]: {
                                  ...componentProps,
                                  [key]: {
                                    ...componentProps[key],
                                    [nestedKey]: e.target.value,
                                  },
                                },
                              });
                            }}
                          />
                        </InnerContainer>
                      ))}
                    </AccordionPanel>
                  )} */}
            </AccordionItem>
            {Object.entries(state[activeComponent]).map(([key, value]) => {
              return (
                <AccordionItem key={key}>
                  <FieldHeading as={AccordionButton}>
                    {toTitleCase(key)}
                    <DropdownArrow
                    // active={activeSections.includes(index + 1)}
                    />
                  </FieldHeading>
                  {typeof value !== 'string' && (
                    <AccordionPanel>
                      {Object.entries(value).map(([nestedKey, nestedValue]) => (
                        <InnerContainer>
                          <InspectorField
                            // key={nestedKey}
                            name={nestedKey}
                            type="color"
                            value={state[activeComponent][key][nestedKey]}
                            // componentProps={componentProps}
                            activeComponent={activeComponent}
                            onChange={e => {
                              setContext({
                                [activeComponent]: {
                                  ...componentProps,
                                  [key]: {
                                    ...componentProps[key],
                                    [nestedKey]: e.target.value,
                                  },
                                },
                              });
                            }}
                          />
                        </InnerContainer>
                      ))}
                    </AccordionPanel>
                  )}
                </AccordionItem>
              );
            })}
          </>
        )}
      </Accordion>
    </Flex>
  );
});

// map some prop names to more user-friendly labels
const fieldNameOverrides = {
  children: 'Text',
  backgroundColor: 'Fill Color',
  color: 'Text Color',
};

function InspectorField({ name, value, onChange, type }) {
  const [open, setOpen] = useState(false);

  return (
    <Flex
      alignItems="center"
      // as="form"
      mb="12px"
    >
      <Box as="label" width="100%" textTransform="capitalize">
        {toTitleCase(fieldNameOverrides[name] ?? name)}
      </Box>
      {type === 'color' && (
        <Box position="relative" style={{ width: '100%' }}>
          <Input
            value={value}
            onChange={onChange}
            onClick={() => setOpen(true)}
          />
          {open && (
            <>
              <Box
                position="fixed"
                top="0px"
                right="0px"
                bottom="0px"
                left="0px"
                onClick={() => setOpen(false)}
              />
              <Box
                position="absolute"
                borderWidth="1px"
                zIndex="50"
                borderRadius="6px"
                // top="0px"
                left="0px"
                style={{
                  transform: 'translateX(8px) translateY(calc(-122%))',
                }}
              >
                <BlockPicker
                  triangle="hide"
                  color={value}
                  onChangeComplete={color => {
                    // console.log({ color });
                    onChange({ target: { value: color.hex } });
                    setOpen(false);
                  }}
                />
              </Box>
            </>
          )}
        </Box>
      )}
      {type === 'text' && <Input value={value} onChange={onChange} />}
    </Flex>
  );
}

export default Inspector;
