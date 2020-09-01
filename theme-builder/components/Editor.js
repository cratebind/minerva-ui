import React, { memo } from 'react';
import { Box, styled } from 'minerva-ui';
import { useAppContext } from './AppContext';
import { Components, ThemeConfig } from './ThemeBuilder';

const Container = styled(Box)`
  flex: 1;
  padding: 40px;
  /* background-image: linear-gradient(to right, #d9e2e9 1px, transparent 1px),
    linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);
  background-size: 20px 20px; */
  overflow: auto;
`;

function Editor() {
  const { state } = useAppContext();

  const activeComponent = state?.activeComponent;

  const AllViews = { ...Components, ...ThemeConfig };

  const Component = activeComponent ? AllViews[activeComponent] : null;

  const { customProps, ...props } = state[activeComponent];

  return (
    <Container>
      <Component {...customProps} {...props} />
    </Container>
  );
}

export default memo(Editor);
