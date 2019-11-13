import React from 'react';
/** @jsx jsx */
import styled from '@emotion/styled';

const StyledText = styled('p')<any>(
  {
    fontSize: 16,
  },
  props => ({
    ...props.theme.Text,
  })
);

export interface TextProps {
  children?: React.ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
