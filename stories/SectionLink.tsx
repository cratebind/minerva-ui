import React from 'react';
import styled from 'styled-components';

const StyledSectionLink = styled.a`
  display: block;
  font-size: 22px;
  font-weight: 600;
  color: #1ea7fd;

  &:hover {
    text-decoration: underline;
  }
`;

const SectionLink = ({ href, ...props }) => (
  <StyledSectionLink
    className="sbdocs sbdocs-h1"
    href={decodeURIComponent(href)}
    {...props}
  />
);

export default SectionLink;
