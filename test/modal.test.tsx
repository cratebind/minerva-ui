import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Modal, ThemeProvider } from '../src';

describe('<Modal />', () => {
  it('should not render when isOpen is false', () => {
    const testId = 'modal';
    const modalContent = 'Modal Content';
    const { queryByText, queryByTestId } = render(
      <ThemeProvider>
        <Modal isOpen={false} data-testid={testId}>
          {modalContent}
        </Modal>
      </ThemeProvider>
    );

    expect(queryByTestId(testId)).not.toBeInTheDocument();
    expect(queryByText(modalContent)).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    const testId = 'modal';
    const { queryByTestId } = render(
      <ThemeProvider>
        <Modal isOpen data-testid={testId} />
      </ThemeProvider>
    );
    expect(queryByTestId(testId)).toBeInTheDocument();
  });
});
