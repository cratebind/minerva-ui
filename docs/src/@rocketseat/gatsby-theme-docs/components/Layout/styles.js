import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Title as BaseTitle } from '../../../../../gatsby/wrapPageElement';

export const Main = styled.main`
  padding: 0 40px;
  height: 100%;

  ${({ disableTOC }) =>
    !disableTOC &&
    css`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;

      @media (max-width: 1200px) {
        flex-direction: column;
      }
    `}

  @media (max-width: 780px) {
    padding: 24px 24px 48px 24px;
  }
`;

export const Children = styled.div`
  width: 100%;
  min-width: 75%;

  @media (min-width: 1200px) {
    max-width: ${({ disableTOC }) => (!disableTOC ? '75%' : '100%')};
  }

  @media (min-width: 780px) {
    ${({ hasTitle }) => !hasTitle && 'padding-top: 40px'};
  }
`;

export const Wrapper = styled.div`
  padding-left: 280px;
  transition: transform 0.5s;

  @media (max-width: 780px) {
    padding-left: 0;
    transform: translate3d(
      ${({ isMenuOpen }) => (isMenuOpen ? '240px' : '0')},
      0,
      0
    );
  }
`;

export const Title = props => (
  <BaseTitle pt={['20px', '40px']} pl={['24px', '40px']} mb="24px" {...props} />
);

// export const Title = styled.h1`
//   padding: 40px 0 0 40px;
//   font-size: 40px;

//   @media (max-width: 780px) {
//     padding: 24px 0 0 24px;
//   }
// `;
