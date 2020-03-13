import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { systemProps } from '../layout';
import PseudoBox from '../PseudoBox';

const StyledLink = styled(PseudoBox)<any>(
  props => ({
    fontSize: 16,
    // ':hover': {
    //   textDecoration: props.isDisabled ? 'none' : 'underline',
    // },
    // color: props.isDisabled ? '#8F8F8F' : '#333333',
    // cursor: props.isDisabled ? 'not-allowed' : 'pointer',
    ...props.theme.Link,
  }),
  systemProps
);

export interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  isExternal?: boolean;
  // isDisabled?: boolean;
}

export const Link = forwardRef(function Link(
  { children, href, isExternal, ...props }: LinkProps,
  ref
) {
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : null;

  return (
    <StyledLink
      as="a"
      href={href}
      ref={ref}
      // @TODO: Rethink this due to possible accessibility issues
      // isDisabled={isDisabled}
      // onClick={isDisabled ? event => event.preventDefault() : onClick}
      {...externalProps}
      {...props}
    >
      {children}
    </StyledLink>
  );
});

export default Link;
