import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MinervaProps, Box } from '../layout';
import { useTheme } from '../theme';
import Stack from '../Stack';

export interface SkeletonProps extends MinervaProps {
  count?: number;
  gap?: string;
}

const pulseKeyframes = keyframes`
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: -135% 0%;
  }
`;

export const SkeletonItem = styled(Box)`
  display: inline-block;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: 1.2s ease-in-out infinite alternate ${pulseKeyframes};

  &::before {
    content: '\00a0';
  }
`;

export const Skeleton = ({
  count = 1,
  width = '100%',
  height = '2rem',
  borderRadius = '5px',
  gap = '10px',
  ...props
}: SkeletonProps) => {
  const theme = useTheme();
  const elements: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <SkeletonItem
        key={i}
        data-testid="skeleton"
        count={count}
        height={height}
        width={width}
        borderRadius={borderRadius}
        {...props}
        {...theme.Skeleton}
      />
    );
  }
  return (
    <Stack width="100%" height="100%" gap={gap}>
      {elements}
    </Stack>
  );
};

export default Skeleton;
