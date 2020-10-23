import React, { forwardRef } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { systemProps } from '../layout';
import PseudoBox from '../PseudoBox';
import { useComponentStyles } from '../theme';
import { MinervaProps } from '../layout';

// const StyledLink = styled(PseudoBox)<any>(
//   props => ({
//     fontSize: 16,
//     // ':hover': {
//     //   textDecoration: props.isDisabled ? 'none' : 'underline',
//     // },
//     // color: props.isDisabled ? '#8F8F8F' : '#333333',
//     // cursor: props.isDisabled ? 'not-allowed' : 'pointer',
//     ...props.theme.Link,
//   }),
//   systemProps
// );

type BaseProps = MinervaProps & React.LinkHTMLAttributes<HTMLAnchorElement>;

export interface LinkProps extends BaseProps {
  children?: React.ReactNode;
  href?: string;
  isExternal?: boolean;
  // isDisabled?: boolean;
}

export const Link = forwardRef(function Link(
  { children, href, isExternal, ...props }: LinkProps,
  ref
) {
  const componentStyles = useComponentStyles('Link');
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : null;

  return (
    <PseudoBox
      as="a"
      href={href}
      ref={ref}
      fontSize="16px"
      // @TODO: Rethink this due to possible accessibility issues
      // isDisabled={isDisabled}
      // onClick={isDisabled ? event => event.preventDefault() : onClick}
      {...externalProps}
      {...componentStyles}
      {...props}
    >
      {children}
    </PseudoBox>
  );
});

export default Link;

if (__DEV__) {
  Link.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    isExternal: PropTypes.bool,
  };
}
