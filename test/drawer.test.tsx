import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  ThemeProvider,
} from '../src';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

const PLACEMENTS: ['left', 'right'] = ['left', 'right']

PLACEMENTS.forEach(placement => {
  describe(`<Drawer /> (${placement})`, () => {
    it('should not render when isOpen is false', () => {
      const testId = 'drawer';
      const drawerContent = 'Drawer Content';
      const { queryByText, queryByTestId } = render(
        <ThemeProvider>
          <Drawer isOpen={false} placement={placement} data-testid={testId}>
            {drawerContent}
          </Drawer>
        </ThemeProvider>
      );

      expect(queryByTestId(testId)).not.toBeInTheDocument();
      expect(queryByText(drawerContent)).not.toBeInTheDocument();
    });

    it('should render when isOpen is true', () => {
      const testId = 'drawer';
      const drawerContent = 'Drawer Content';
      const { queryByText, queryByTestId } = render(
        <ThemeProvider>
          <Drawer isOpen placement={placement} data-testid={testId}>
            {drawerContent}
          </Drawer>
        </ThemeProvider>
      );
      expect(queryByTestId(testId)).toBeInTheDocument();
      expect(queryByText(drawerContent)).toBeInTheDocument();
    });

    it('should render DrawerHeader when component is called and when isOpen is true', () => {
      const testId = 'drawer-header';
      const drawerContent = 'Drawer Header';
      const { queryByText, queryByTestId } = render(
        <ThemeProvider>
          <Drawer isOpen placement={placement} >
            <DrawerHeader data-testid={testId}>{drawerContent}</DrawerHeader>
          </Drawer>
        </ThemeProvider>
      );
      expect(queryByTestId(testId)).toBeInTheDocument();
      expect(queryByText(drawerContent)).toBeInTheDocument();
    });

    it('should render Drawer Body when component is called and when isOpen is true', () => {
      const testId = 'drawer-body';
      const drawerContent = 'Drawer Body';
      const { queryByText, queryByTestId } = render(
        <ThemeProvider>
          <Drawer isOpen placement={placement} >
            <DrawerBody data-testid={testId}>{drawerContent}</DrawerBody>
          </Drawer>
        </ThemeProvider>
      );
      expect(queryByTestId(testId)).toBeInTheDocument();
      expect(queryByText(drawerContent)).toBeInTheDocument();
    });

    it('should render Drawer Footer when component is called and when isOpen is true', () => {
      const testId = 'drawer-footer';
      const drawerContent = 'Drawer Footer';
      const { queryByText, queryByTestId } = render(
        <ThemeProvider>
          <Drawer isOpen placement={placement} >
            <DrawerFooter data-testid={testId}>{drawerContent}</DrawerFooter>
          </Drawer>
        </ThemeProvider>
      );
      expect(queryByTestId(testId)).toBeInTheDocument();
      expect(queryByText(drawerContent)).toBeInTheDocument();
    });

    it('should be accessible when Open', async () => {
      const drawerContent = 'Drawer Content';
      const { container } = render(
        <ThemeProvider  >
          <Drawer isOpen placement={placement}>{drawerContent}</Drawer>
        </ThemeProvider>
      );

      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });

    it('should be accessible when Closed', async () => {
      const drawerContent = 'Drawer Content';
      const { container } = render(
        <ThemeProvider  >
          <Drawer isOpen={false} placement={placement}>{drawerContent}</Drawer>
        </ThemeProvider>
      );

      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
})
