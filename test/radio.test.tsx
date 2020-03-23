import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import * as ReactDOM from 'react-dom';
import { RadioGroup, Radio, ThemeProvider } from '../src';
// import { axe, toHaveNoViolations } from 'jest-axe';
// expect.extend(toHaveNoViolations);

describe('RadioGroup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioGroup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows light gray border when not checked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioGroup selectedValue={'test'}>
          <Radio value="test1"></Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const radio = getByTestId('control-box');
    expect(radio).toHaveStyleRule('border', '2px solid #ecebed');
  });

  it('shows colored border when checked', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioGroup selectedValue={'test'}>
          <Radio value="test"></Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const radio = getByTestId('control-box');
    expect(radio).toHaveStyleRule('border', '5.33px solid #5850ec');
  });

  it('shows correct label', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <RadioGroup selectedValue={'test'}>
          <Radio value="test">Label Placeholder</Radio>
        </RadioGroup>
      </ThemeProvider>
    );
    const label = getByTestId('label');
    expect(label).toHaveTextContent('Label Placeholder');
  });

  // @TODO: test accessibility
  // it('should dbe accessible', async () => {
  //   const { container } = render(
  //     <ThemeProvider>
  //       <RadioGroup selectedValue={'test'}>
  //         <Radio value="test">Label Placeholder</Radio>
  //       </RadioGroup>
  //     </ThemeProvider>
  //   );
  //   const results = await axe(container);

  //   // expect(results).toHaveNoViolations();
  // });
});
