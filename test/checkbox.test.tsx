import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import * as ReactDOM from 'react-dom';
import { Checkbox, ThemeProvider } from '../src';

// const ToggleCheckbox = ({ children }) => {
//   const [checked, setChecked] = useState(false);
//   return (
//     <Checkbox
//       checked={checked}
//       onChange={() => setChecked(!checked)}
//     >
//       {children}
//     </Checkbox>
//   )
// }

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Checkbox />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows white background when not checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');

    expect(checkbox).toHaveStyleRule('background-color', '#fff');
  });

  it('shows checkbox when checked', () => {
    const labelText = 'Checked Checkbox';
    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox checked>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');

    expect(checkbox).toHaveStyleRule('background-color', '#5850ec');
  });

  // it('changes styles when checked', () => {
  //   const labelText = 'Checked Checkbox';
  //   const { getByTestId, getByLabelText } = render(
  //     <ThemeProvider>
  //       <ToggleCheckbox>{labelText}</ToggleCheckbox>
  //     </ThemeProvider>
  //   );
  //   const input = getByLabelText(labelText);
  //   const checkbox = getByTestId('control-box');
  //   expect(checkbox).toHaveStyleRule('background-color', '#fff');

  //   fireEvent.change(input, { target: { checked: true } });
  //   fireEvent.change(getByTestId('checkbox-container'), { target: { checked: true } });
  //   fireEvent.change(checkbox, { target: { checked: true } });

  //   expect(getByTestId('control-box')).toHaveStyleRule('background-color', '#5850ec');
  // });

  it('is accessible via the keyboard', () => {
    const labelText = 'Checked Checkbox';
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox onChange={handleChange}>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');

    fireEvent.keyDown(checkbox, { key: ' ' });

    expect(handleChange).toHaveBeenCalled();
  });

  it('can trigger onKeyDown if provided', () => {
    const labelText = 'Checked Checkbox';
    const handleChange = jest.fn();
    const handleKeyDown = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider>
        <Checkbox onChange={handleChange} onKeyDown={handleKeyDown}>{labelText}</Checkbox>
      </ThemeProvider>
    );
    const checkbox = getByTestId('control-box');

    fireEvent.keyDown(checkbox, { key: ' ' });

    expect(handleChange).not.toHaveBeenCalled();
    expect(handleKeyDown).toHaveBeenCalled();
  });
});
