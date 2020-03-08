import React from 'react';
import { Box, Flex, Input } from 'minerva-ui';
import { useAppContext } from '../AppContext';

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

  const activeComponent = state?.activeComponent;

  // const Component = activeComponent ? Components[activeComponent] : null;

  const componentProps = state[activeComponent];

  return (
    <Flex
      flex="0 0 20rem"
      flexDirection="column"
      borderLeft="1px solid #cad5de"
    >
      <Title>{activeComponent}</Title>
      <InnerContainer>
        {Object.entries(componentProps).map(([key, value]) => (
          <Flex
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
