import React, { useContext } from 'react';
import { Box, Flex, Input, defaultTheme } from 'minerva-ui';
import { useAppContext } from '../AppContext';
import { ThemeContext } from 'styled-components';

const InnerContainer = props => <Box padding="10px" {...props} />;

const Title = props => (
  <Box
    fontSize="18px"
    fontWeight={600}
    p="10px"
    borderBottomWidth="1px"
    mb="5px"
    {...props}
  />
);

export default function Inspector() {
  const { state, setContext } = useAppContext();
  const themeContext = useContext(ThemeContext);

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
      <InnerContainer>
        {Object.entries(themeContext.Button.container).map(([key, value]) => (
          <Flex
            key={key}
            alignItems="center"
            as="form"
            mb="12px"
            // onSubmit={e => {
            //   e.preventDefault();
            // }}
          >
            <Box as="label" width="100%" textTransform="capitalize">
              {key}
            </Box>
            <Input
              value={value}
              onChange={e =>
                setContext({
                  [activeComponent]: {
                    ...componentProps,
                    [key]: e.target.value,
                  },
                })
              }
            />
          </Flex>
        ))}
      </InnerContainer>
    </Flex>
  );
}
