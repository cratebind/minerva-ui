import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { systemProps } from '../layout';
import PseudoBox from '../PseudoBox';
import { useComponentStyles } from '../theme';
import { MinervaProps } from '../layout';
import { forwardRefWithAs } from '../type-utilities';

type BaseProps = MinervaProps & React.LinkHTMLAttributes<HTMLAnchorElement>;

export interface LinkProps extends BaseProps {
  children?: React.ReactNode;
  href?: string;
  /** If `true`, the link will open in new tab */
  isExternal?: boolean;
}

/**
 * Links are <a> tags used for navigation.
 *
 * @see Docs @TODO
 */
export const Link = forwardRefWithAs<LinkProps, 'a'>(function Link(
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
      {...externalProps}
      {...componentStyles}
      {...props}
    >
      {children}
    </PseudoBox>
  );
});

export default Link;

// if (__DEV__) {
//   Link.propTypes = {
//     children: PropTypes.node,
//     href: PropTypes.string,
//     isExternal: PropTypes.bool,
//   };
// }
