import React from 'react';
import { Box, styled } from 'minerva-ui';
import { useAppContext } from '../AppContext';
import { Components } from '../App';

const Container = styled(Box)`
  flex: 1;
  padding: 40px;
  background-image: linear-gradient(to right, #d9e2e9 1px, transparent 1px),
    linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);
  background-size: 20px 20px;
`;

export default function Editor() {
  const { state, setContext } = useAppContext();

  const activeComponent = state?.activeComponent;

  const Component = activeComponent ? Components[activeComponent] : null;

  console.log(Component.componentStyle);

  const props = state[activeComponent];

  console.log(props);

  return (
    <Container>
      <Component {...props} />
    </Container>
  );
}
