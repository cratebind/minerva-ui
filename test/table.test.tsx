import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHeaderCell,
} from '../src';
import { ThemeProvider } from '../src';

const BasicTable = () => {
  const ref = React.useRef(null);

  return (
    <ThemeProvider>
      <Table ref={ref}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Job</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
            <TableCell>Tester</TableCell>
            <TableCell>Testing</TableCell>
            <TableCell>Test Master</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

describe('<Table />', () => {
  it('should render', () => {
    const { container } = render(<BasicTable />);
    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    const { container } = render(<BasicTable />);

    expect(container).toMatchSnapshot();
  });

  // it('should change style if disabled', () => {
  //   const { container, getByRole } = render(
  //     <ThemeProvider>
  //       <Table disabled>Disabled Table</Table>
  //     </ThemeProvider>
  //   );

  //   expect(container).toMatchSnapshot();
  //   expect(getByRole('button')).toHaveStyleRule('opacity', '0.4', {
  //     modifier: ':disabled',
  //   });
  // });
});
