import React from 'react';
import styled from 'styled-components';
import { MinervaProps } from '../layout';
import { useTheme } from '../theme';

export interface SkeletonProps extends MinervaProps {
  count?: number;
  height?: string;
  width?: string;
  circle?: boolean;
}

const Container = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%; 
  width: 100%;
`;

export interface SkeletonAnimationProps {
  circle?: boolean;
}

const SkeletonAnimation = styled('div')`
  display: inline-block;
  width: ${(props: SkeletonAnimationProps) => props.circle ? '100%' : '100%' };
  height: ${(props: SkeletonAnimationProps) => props.circle ? '100%' : '2em' };
  /* width: 3em; */
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  /* width: 5.5em; */
  border-radius: 5px;
  line-height: 1;

  &::before {
    content: '\00a0';
  }
`;

export const Skeleton = ({
  count = 1,
  height,
  width,
  circle,
  ...props
}: SkeletonProps) => {
  const theme = useTheme();
  const elements: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <SkeletonAnimation
        style={{ height, width, borderRadius: circle ? '50%' : null }}
        count={count}
        circle={circle}
        {...props}
        {...theme.Skeleton}
      ></SkeletonAnimation>
    );
  }
  return <Container {...props} style={{height, width}}>{elements}</Container>;
};

export default Skeleton;
