import React, { memo } from 'react';
import { Box, styled } from 'minerva-ui';
import { useAppContext } from './AppContext';
import { Components, Examples } from './ThemeBuilder';

const Container = styled(Box)`
  flex: 1;
  padding: 40px;
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
    <Container>
      <Component {...customProps} />
    </Container>
  );
}

export default memo(Editor);
