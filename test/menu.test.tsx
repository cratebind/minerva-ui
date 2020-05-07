import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  MenuContainer,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink,
  Icon,
  ThemeProvider,
} from '../src';
// import { axe, toHaveNoViolations } from 'jest-axe';
// expect.extend(toHaveNoViolations);

const ExampleMenu = () => (
  <MenuContainer data-testid="menu-container">
    <MenuButton data-testid="menu-button">
      Actions <Icon name="chevron-down" ml={2} size="14px" />
    </MenuButton>
    <MenuList data-testid="menu-list">
      <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
      <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
      <MenuItem onSelect={() => alert('Mark as Draft')}>Mark as Draft</MenuItem>
      <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
      <MenuLink href="https://minerva-ui.netlify.com/">
        Open Documentation
      </MenuLink>
    </MenuList>
  </MenuContainer>
);

describe('<Menu />', () => {
  it('should render', () => {
    const { queryByTestId } = render(
      <ThemeProvider>
        <ExampleMenu />
      </ThemeProvider>
    );

    expect(queryByTestId('menu-button')).toBeInTheDocument();
  });

  // @TODO: Figure out how to test components being rendered in portals
  // it('should show <MenuList /> when clicked', () => {
  //   const { queryByTestId, baseElement } = render(
  //     <ThemeProvider>
  //       <ExampleMenu />
  //     </ThemeProvider>
  //   );

  //   // debug();
  //   // console.log(getByRole('menu'))
  //   // console.log(document.body.querySelector('[data-reach-menu=""]'))
  //   // console.log(baseElement.querySelector('[data-reach-menu=""]'))
  //   const menu = baseElement.querySelector('[data-reach-menu=""]')
  //   expect(menu && menu.getAttribute('hidden')).not.toBeNull()
  //   expect(queryByTestId('menu-list')).not.toBeInTheDocument();
  // });

  // it('should render ModalHeader when component is called and when isOpen is true', () => {
  //   const testId = 'modal-header';
  //   const modalContent = 'Menu Header';
  //   const { queryByText, queryByTestId } = render(
  //     <ThemeProvider>
  //       <Menu isOpen>
  //         <ModalHeader data-testid={testId}>{modalContent}</ModalHeader>
  //       </Menu>
  //     </ThemeProvider>
  //   );
  //   expect(queryByTestId(testId)).toBeInTheDocument();
  //   expect(queryByText(modalContent)).toBeInTheDocument();
  // });

  // it('should render Menu Body when component is called and when isOpen is true', () => {
  //   const testId = 'modal-body';
  //   const modalContent = 'Menu Body';
  //   const { queryByText, queryByTestId } = render(
  //     <ThemeProvider>
  //       <Menu isOpen>
  //         <ModalBody data-testid={testId}>{modalContent}</ModalBody>
  //       </Menu>
  //     </ThemeProvider>
  //   );
  //   expect(queryByTestId(testId)).toBeInTheDocument();
  //   expect(queryByText(modalContent)).toBeInTheDocument();
  // });

  // it('should render Menu Footer when component is called and when isOpen is true', () => {
  //   const testId = 'modal-footer';
  //   const modalContent = 'Menu Footer';
  //   const { queryByText, queryByTestId } = render(
  //     <ThemeProvider>
  //       <Menu isOpen>
  //         <ModalFooter data-testid={testId}>{modalContent}</ModalFooter>
  //       </Menu>
  //     </ThemeProvider>
  //   );
  //   expect(queryByTestId(testId)).toBeInTheDocument();
  //   expect(queryByText(modalContent)).toBeInTheDocument();
  // });

  // it('should be accessible when Open', async () => {
  //   const modalContent = 'Menu Content';
  //   const { container } = render(
  //     <ThemeProvider>
  //       <Menu isOpen>{modalContent}</Menu>
  //     </ThemeProvider>
  //   );

  //   const results = await axe(container);

  //   expect(results).toHaveNoViolations();
  // });

  // it('should be accessible when Closed', async () => {
  //   const modalContent = 'Menu Content';
  //   const { container } = render(
  //     <ThemeProvider>
  //       <Menu isOpen={false}>{modalContent}</Menu>
  //     </ThemeProvider>
  //   );

  //   const results = await axe(container);

  //   expect(results).toHaveNoViolations();
  // });
});
