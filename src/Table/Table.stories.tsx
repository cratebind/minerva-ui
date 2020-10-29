import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table, {
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  CustomTableProps,
} from '.';
import { Link } from '..';
import { filteredArgs } from '../utils';

const meta: Meta = {
  title: 'Table',
  component: Table,
  subcomponents: {
    TableHeader,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
  },
  argTypes: {
    ...filteredArgs,
    placement: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CustomTableProps> = ({}) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Job</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
            <TableCell>Tester</TableCell>
            <TableCell>Testing</TableCell>
            <TableCell>Test Master</TableCell>
            <TableCell>
              <Link>Edit</Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Test</TableCell>
            <TableCell>Tester</TableCell>
            <TableCell>Testing</TableCell>
            <TableCell>Test Master</TableCell>
            <TableCell>
              <Link>Edit</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
