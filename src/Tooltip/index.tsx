import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Tooltip as TooltipComponent } from '@reach/tooltip';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';
import { MinervaProps, systemProps } from '../layout';
import styled from 'styled-components';
import { useComponentStyles } from '../theme';

export interface TooltipProps extends MinervaProps {
  children?: React.ReactNode;
  label?: string;
  placement?: 'top' | 'left' | 'bottom' | 'right' | 'default';
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

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'd',
  'textDecoration',
  'visibility',
  'transform',
  'cursor',
  'minWidth',
  'maxWidth',
  'width',
  'height',
  'isOpen',
  'onDismiss',
  'onClose',
]);

// @ts-ignore
export const TooltipCustom = styled(TooltipComponent).withConfig({
  // for some reason we have to manually allow "position" to be passed
  shouldForwardProp: prop => prop === 'position' || shouldForwardProp(prop),
})(
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
  ({ label, children, placement = 'default', ...props }: TooltipProps, ref) => {
    const setPlacement = (triggerRect, tooltipRect) => {
      switch (placement) {
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

    const componentStyles = useComponentStyles('Tooltip');

    return (
      <TooltipCustom
        ref={ref}
        position={setPlacement}
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
    placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left', 'default']),
  };
}
