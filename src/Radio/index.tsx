import React, { useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { MinervaProps } from '../layout';
import { Box } from '../layout';
import { useComponentStyles } from '../theme';
import { PseudoBox } from '..';

export interface RadioGroupProps {
  children?: React.ReactNode;
  value?: string;
  radioColor?: string;
  radioSize?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ControlBoxProps = {
  checked?: boolean;
  theme?: any;
  radioColor?: string;
  radioSize?: any;
};

export interface RadioProps extends BaseProps {
  children?: React.ReactNode;
  value?: string;
}

type ContextValue = {
  selectedValue: string | undefined;
  radioSize: string | undefined;
  radioColor: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectedValueContext = React.createContext<ContextValue>({
  selectedValue: undefined,
  radioSize: undefined,
  radioColor: undefined,
});

export const RadioGroup = ({
  children,
  value: selectedValue,
  radioSize = '16px',
  radioColor = '#5850ec',
  onChange,
  ...props
}: RadioGroupProps) => {
  return (
    <SelectedValueContext.Provider
      value={{ selectedValue, radioColor, radioSize, onChange }}
    >
      <Box data-testid="radio-group" role="radiogroup" {...props}>
        {children}
      </Box>
    </SelectedValueContext.Provider>
  );
};

type BaseProps = MinervaProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = forwardRef(function Radio(
  { value, children, disabled = false, ...props }: RadioProps,
  ref
) {
  const { selectedValue, onChange } = useContext(SelectedValueContext);
  const componentStyles = useComponentStyles('Radio');

  const checked = value === selectedValue;

  return (
    <Box as="label" display="flex" alignItems="center">
      <PseudoBox
        ref={ref}
        as="input"
        type="radio"
        onChange={onChange}
        value={value}
        checked={checked}
        appearance="none"
        height="16px"
        width="16px"
        borderRadius="100%"
        borderWidth="1px"
        position="relative"
        transition="all 120ms ease"
        disabled={disabled}
        borderColor={checked ? 'rgb(88, 80, 236)' : 'inherit'}
        bg={checked ? 'rgb(88, 80, 236)' : 'transparent'}
        cursor="pointer"
        _focus={{
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(164,202,254,.45)',
        }}
        _after={{
          content: `""`,
          transition: 'transform 180ms ease',
          height: '6px',
          width: '6px',
          backgroundColor: '#fff',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) ${
            checked ? 'scale(1)' : 'scale(0.5)'
          }`,
          borderRadius: '100%',
          display: disabled ? 'none' : 'inherit',
        }}
        _disabled={{
          backgroundColor: 'rgba(118, 118, 118, 0.3)',
          cursor: 'not-allowed',
          borderColor: 'rgba(118, 118, 118, 0.3)',
        }}
        {...componentStyles}
        {...props}
      />
      <Box pl={2}>{children}</Box>
    </Box>
  );
});

// export const Radio = forwardRef(function Radio(
//   { value, isDisabled, children, ...props }: RadioProps,
//   ref
// ) {
//   // only accept defaultChecked if no onChange handler is passed
//   const checkedProps = !onChange ? { defaultChecked: checked } : { checked };

//   const id = useId();

//   return (
//     <RadioContainer
//       data-testid="radio"
//       htmlFor={id}
//       as="label"
//       aria-label={value}
//       ref={ref}
//       {...componentStyles}
//       {...props}
//     >
//       <Box display="inline-flex">
//         <VisuallyHidden
//           as="input"
//           type="radio"
//           aria-label={value}
//           id={id}
//           value={value}
//           onChange={onChange}
//           aria-checked={checked}
//           disabled={isDisabled}
//           {...checkedProps}
//         />

//         <ControlBox
//           data-testid="control-box"
//           as="span"
//           aria-hidden
//           data-minerva="control-box"
//           checked={checked}
//           radioColor={radioColor}
//           radioSize={radioSize}
//         >
//           <Box
//             borderRadius="50%"
//             width="100%"
//             height="100%"
//             backgroundColor={radioColor}
//             transition="all 180ms ease"
//             transform={checked ? 'scale(1)' : 'scale(0)'}
//           />
//         </ControlBox>
//       </Box>
//       {children && <Box data-testid="label">{children}</Box>}
//     </RadioContainer>
//   );
// });

export default Radio;

if (__DEV__) {
  Radio.propTypes = {
    children: PropTypes.node,
    value: PropTypes.string,
  };

  RadioGroup.propTypes = {
    children: PropTypes.node,
    value: PropTypes.string,
    radioColor: PropTypes.string,
    radioSize: PropTypes.string,
    onChange: PropTypes.func,
  };
}
