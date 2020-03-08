import React from 'react';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

const StyledLink = styled('a')<any>(
  { fontSize: 16 },
  props => ({
    ':hover': {
      textDecoration: props.isDisabled ? 'none' : 'underline',
    },
    color: props.isDisabled ? '#8F8F8F' : '#333333',
    cursor: props.isDisabled ? 'not-allowed' : 'pointer',
    ...props.theme.Link,
  }),
  color,
  space,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  background,
  border,
  typography
);

export interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  isDisabled?: boolean;
  isExternal?: boolean;
  onClick?: Function;
}

const Link = ({
  children,
  href,
  isDisabled = false,
  isExternal,
  onClick,
  ...props
}: LinkProps) => {
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : null;

  return (
    <StyledLink
      href={href}
      isDisabled={isDisabled}
      // onClick={isDisabled ? event => event.preventDefault() : onClick}
      {...externalProps}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
