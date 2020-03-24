import React, { useState } from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import * as ReactDOM from 'react-dom';
import { RadioGroup, Radio, ThemeProvider } from '../src';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

const ExampleGroup = ({ initialValue = 'test1' }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <ThemeProvider>
      <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
        <Radio value="test1">Option 1</Radio>
        <Radio value="test2">Option 2</Radio>
      </RadioGroup>
      <div data-testid="group-value">{value}</div>
    </ThemeProvider>
  );
};

describe('RadioGroup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioGroup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('hides colored fill when not checked', () => {
    const size = '20px';
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioGroup value="test" radioSize="20px">
          <Radio value="test1">First Option</Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const radio = getByTestId('control-box');
    expect(radio).toHaveStyleRule('height', size);
    expect(radio).toHaveStyleRule('width', size);
    expect(radio).toHaveStyleRule('border', '2px solid #ecebed');
    expect(radio.firstChild).toHaveStyleRule('transform', 'scale(0)');
  });

  it('shows colored fill when checked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioGroup value="test">
          <Radio value="test">First Option</Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const radio = getByTestId('control-box');
    expect(radio.firstChild).toHaveStyleRule('transform', 'scale(1)');
  });

  it('shows correct label', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioGroup value="test">
          <Radio value="test">Label Placeholder</Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const label = getByTestId('label');
    expect(label).toHaveTextContent('Label Placeholder');
  });

  it('should have first option selected if provided', () => {
    const { getByTestId } = render(<ExampleGroup />);

    const group = getByTestId('group-value');

    expect(group).toHaveTextContent('test1');
  });

  it('should be accessible', async () => {
    const { container } = render(
      <ThemeProvider>
        <RadioGroup value={'test'}>
          <Radio value="test">Label Placeholder</Radio>
        </RadioGroup>
      </ThemeProvider>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
