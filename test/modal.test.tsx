import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Modal, ThemeProvider } from '../src';

describe('<Modal />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Modal>Test</Modal>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
