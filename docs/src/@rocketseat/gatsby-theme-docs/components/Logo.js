import React from 'react';
import styled from '@emotion/styled';

const StyledLogo = styled.h1`
  font-weight: 800;
  text-decoration: none;
  margin-bottom: 0;
  margin-top: 0;
  color: #161e2e;
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

const Logo = () => <StyledLogo>Minerva UI</StyledLogo>;

export default Logo;
