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
    const { getByLabelText } = render(
      <ThemeProvider>
        <RadioGroup value="test">
          <Radio value="test1" height={size} width={size}>
            First Option
          </Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const radio = getByLabelText('First Option');
    expect(radio).toHaveStyleRule('height', size);
    expect(radio).toHaveStyleRule('width', size);
    expect(radio).toHaveStyleRule('border-color', 'inherit');
    expect(radio).toHaveStyleRule('background-color', 'transparent');
    expect(radio).toHaveStyleRule(
      'transform',
      'translate(-50%,-50%) scale(0.5)',
      {
        modifier: ':after',
      }
    );
  });

  it('shows colored fill when checked', () => {
    const { getByLabelText } = render(
      <ThemeProvider>
        <RadioGroup value="test">
          <Radio value="test">First Option</Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const radio = getByLabelText('First Option');
    expect(radio).toHaveStyleRule('background-color', 'rgb(88,80,236)');
  });

  it('shows correct label', () => {
    const { container } = render(
      <ThemeProvider>
        <RadioGroup value="test">
          <Radio value="test" data-testid="radio">
            Label Placeholder
          </Radio>
        </RadioGroup>
      </ThemeProvider>
    );

    expect(container).toHaveTextContent('Label Placeholder');
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
