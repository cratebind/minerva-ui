import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Tooltip as TooltipComponent } from '@reach/tooltip';
import { MinervaProps, systemProps } from '../layout';
import '@reach/tooltip/styles.css';
import styled from 'styled-components';
import { useComponentStyles } from '../theme';

export interface TooltipProps extends MinervaProps {
  children?: React.ReactNode;
  label?: string;
  tooltipPosition?: 'top' | 'left' | 'bottom' | 'right' | 'default';
}

const top = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const left = triggerCenter - tooltipRect.width / 2;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.top - tooltipRect.height - 8 + window.scrollY,
  };
};

const bottom = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const left = triggerCenter - tooltipRect.width / 2;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY,
  };
};

const right = (triggerRect, tooltipRect) => {
  const left = triggerRect.left + triggerRect.width;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) + 8 + window.scrollX,
    top:
      triggerRect.top +
      triggerRect.height / 2 -
      tooltipRect.height / 2 +
      window.scrollY,
  };
};

const left = (triggerRect, tooltipRect) => {
  const left = triggerRect.left - tooltipRect.width;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) - 8 + window.scrollX,
    top:
      triggerRect.top +
      triggerRect.height / 2 -
      tooltipRect.height / 2 +
      window.scrollY,
  };
};

const defaultPosition = (triggerRect, tooltipRect) => {
  const left = triggerRect.left;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;

  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY,
  };
};

export const TooltipCustom = styled(TooltipComponent)(
  {
    backgroundColor: 'gray.700',
    border: 0,
    borderRadius: 'md',
    padding: '0.5rem 1rem',
    fontSize: 'sm',
    color: 'white',
  },
  systemProps
);

export const Tooltip = forwardRef(
  (
    { label, children, tooltipPosition = 'default', ...props }: TooltipProps,
    ref
  ) => {
    const setTooltipPosition = (triggerRect, tooltipRect) => {
      switch (tooltipPosition) {
        case 'top':
          return top(triggerRect, tooltipRect);
        case 'bottom':
          return bottom(triggerRect, tooltipRect);
        case 'right':
          return right(triggerRect, tooltipRect);
        case 'left':
          return left(triggerRect, tooltipRect);
        default:
          return defaultPosition(triggerRect, tooltipRect);
      }
    };

    const componentStyles = useComponentStyles('Text');

    return (
      <TooltipCustom
        ref={ref}
        position={setTooltipPosition}
        label={label}
        backgroundColor="gray.700"
        border="none"
        borderRadius="md"
        padding="0.5em 1em"
        fontSize="xs"
        color="white"
        {...props}
        {...componentStyles}
      >
        {children}
      </TooltipCustom>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;

if (__DEV__) {
  Tooltip.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'right', 'default']),
  };
}
