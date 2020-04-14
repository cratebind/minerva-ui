import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { MinervaProps, Box, systemProps } from '../layout';
import VisuallyHidden from '../VisuallyHidden';

/**
 * TODO:
 * - Add sizes
 */

export const CheckboxContainer = styled(Box)(
  props => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    ...props.theme.Checkbox,
  }),
  systemProps
);

export type ControlBoxProps = {
  checked?: boolean;
  theme?: any;
};

export const ControlBox = styled(Box)<ControlBoxProps>(
  (props: ControlBoxProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '4px',
    width: '18px',
    height: '18px',
    bg: 'primary',
    marginRight: '6px',
    color: 'white',
    transition: 'background-color 120ms ease 0s, box-shadow 250ms ease 0s',
    borderColor: props.checked ? '#5850ec' : '#ecebed',
    backgroundColor: props.checked ? '#5850ec' : '#fff',
    ':focus': {
      borderColor: '#a4cafe',
      boxShadow: '0 0 0 3px rgba(118,169,250,.45)',
      outline: 0,
    },
  }),
  systemProps
);

// const CheckboxIcon = ({ checked = false, fill = '#fff' }) => {
//   return (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M11.4937 4.75844C11.8383 4.41385 12.397 4.41385 12.7416 4.75844C13.0861 5.10302 13.0861 5.66169 12.7416 6.00627L7.44745 11.3004C7.10287 11.645 6.54419 11.645 6.19961 11.3004L3.25844 8.35921C2.91385 8.01463 2.91385 7.45596 3.25844 7.11138C3.60302 6.7668 4.16169 6.7668 4.50627 7.11138L6.82353 9.42863L11.4937 4.75844Z"
//         fill={checked ? fill : 'transparent'}
//       />
//     </svg>
//   );
// };

// const VisuallyHidden = styled.div`
//   border: 0px;
//   clip: rect(0px, 0px, 0px, 0px);
//   height: 1px;
//   width: 1px;
//   padding: 0px;
//   overflow: hidden;
//   white-space: nowrap;
//   position: absolute;
// `;

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

// extend the native HTML attributes for nicer autocompletion
export interface CheckboxProps extends BaseProps {
  // define the custom props we're going to be using
  children?: React.ReactNode;
  // add a question mark to make it an optional prop
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => any;
  style?: any;
}

export const Checkbox = forwardRef(function Checkbox(
  props: CheckboxProps,
  ref: any
) {
  const { children, checked = false, onChange, ...rest } = props;

  return (
    <CheckboxContainer as="label" ref={ref} {...rest}>
      <CustomCheckboxContainer
        data-testid="checkbox-container"
        checked={checked}
        onChange={onChange}
      >
        <VisuallyHidden>
          <CustomCheckboxInput />
        </VisuallyHidden>
        <ControlBox data-testid="control-box" tabIndex={0} checked={checked}>
          <Box
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            p="1px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </Box>
        </ControlBox>
      </CustomCheckboxContainer>
      {children}
    </CheckboxContainer>
  );
});

export default Checkbox;
