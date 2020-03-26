import React from 'react';
import styled from 'styled-components';
import { MinervaProps } from '../layout';
import { useTheme } from '../theme';

export interface SkeletonProps extends MinervaProps {
  count?: number;
  circle?: boolean;
}

export interface SkeletonAnimationProps {
  circle?: boolean;
  gap?: string;
  height?: string;
  width?: string;
}

const Container = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const SkeletonAnimation = styled('div')`
  display: inline-block;
  width: ${(props: SkeletonAnimationProps) =>
    props.width ? `${props.width}` : '100%'};
  height: ${(props: SkeletonAnimationProps) =>
    props.height ? `${props.height}` : '2em'};
  border-radius: ${(props: SkeletonAnimationProps) =>
    props.circle ? '50%' : '5px'};
  margin-bottom: ${(props: SkeletonAnimationProps) =>
    props.gap ? `${props.gap}` : '10px'};
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
  line-height: 1;

  &::before {
    content: '\00a0';
  }
`;

export const Skeleton = ({ count = 1, circle, ...props }: SkeletonProps) => {
  const theme = useTheme();
  const elements: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <SkeletonAnimation
        key={i}
        data-testid="skeleton"
        count={count}
        circle={circle}
        {...props}
        {...theme.Skeleton}
      />
    );
  }
  return <Container>{elements}</Container>;
};

export default Skeleton;
