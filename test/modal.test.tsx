import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ThemeProvider,
} from '../src';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

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
    const modalContent = 'Modal Content';
    const { queryByText, queryByTestId } = render(
      <ThemeProvider>
        <Modal isOpen data-testid={testId}>
          {modalContent}
        </Modal>
      </ThemeProvider>
    );
    expect(queryByTestId(testId)).toBeInTheDocument();
    expect(queryByText(modalContent)).toBeInTheDocument();
  });

  it('should render ModalHeader when component is called and when isOpen is true', () => {
    const testId = 'modal-header';
    const modalContent = 'Modal Header';
    const { queryByText, queryByTestId } = render(
      <ThemeProvider>
        <Modal isOpen>
          <ModalHeader data-testid={testId}>{modalContent}</ModalHeader>
        </Modal>
      </ThemeProvider>
    );
    expect(queryByTestId(testId)).toBeInTheDocument();
    expect(queryByText(modalContent)).toBeInTheDocument();
  });

  it('should render Modal Body when component is called and when isOpen is true', () => {
    const testId = 'modal-body';
    const modalContent = 'Modal Body';
    const { queryByText, queryByTestId } = render(
      <ThemeProvider>
        <Modal isOpen>
          <ModalBody data-testid={testId}>{modalContent}</ModalBody>
        </Modal>
      </ThemeProvider>
    );
    expect(queryByTestId(testId)).toBeInTheDocument();
    expect(queryByText(modalContent)).toBeInTheDocument();
  });

  it('should render Modal Footer when component is called and when isOpen is true', () => {
    const testId = 'modal-footer';
    const modalContent = 'Modal Footer';
    const { queryByText, queryByTestId } = render(
      <ThemeProvider>
        <Modal isOpen>
          <ModalFooter data-testid={testId}>{modalContent}</ModalFooter>
        </Modal>
      </ThemeProvider>
    );
    expect(queryByTestId(testId)).toBeInTheDocument();
    expect(queryByText(modalContent)).toBeInTheDocument();
  });

  it('should be accessible when Open', async () => {
    const modalContent = 'Modal Content';
    const { container } = render(
      <ThemeProvider>
        <Modal isOpen>{modalContent}</Modal>
      </ThemeProvider>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should be accessible when Closed', async () => {
    const modalContent = 'Modal Content';
    const { container } = render(
      <ThemeProvider>
        <Modal isOpen={false}>{modalContent}</Modal>
      </ThemeProvider>
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
