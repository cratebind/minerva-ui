import React, { memo } from 'react';
import { Box, Heading, styled } from 'minerva-ui';
import { useAppContext } from './AppContext';
import { Components, Examples } from './ThemeBuilder';

const Container = styled(Box)`
  flex: 1;
  overflow: auto;
`;

function Editor() {
  const { state } = useAppContext();

  const activeComponent = state?.activeComponent;

  const AllViews = {
    ...Components,
    // ...ThemeConfig,
    ...Examples,
  };

  const Component = activeComponent ? AllViews[activeComponent] : null;

  const customProps = state[activeComponent]?.customProps || {};

  return (
    <>
      <Container>
        <Heading border={0} margin="8px 12px">
          {activeComponent}
        </Heading>
        <Box padding="20px" overflow="auto">
          <Component {...customProps} />
        </Box>
      </Container>
    </>
  );
}

export default memo(Editor);
