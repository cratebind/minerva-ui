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

type tableHeader = string | null;
type tableData = any;

interface TableDataExample {
  name?: tableData;
  job?: tableData;
  status?: tableData;
  role?: tableData;
  options?: tableData;
}

const TABLE_HEADER_EXAMPLE: Array<tableHeader> = [
  'NAME',
  'JOB',
  'STATUS',
  'ROLE',
  '',
];

const TABLE_DATA_EXAMPLE: Array<TableDataExample> = [
  {
    name: 'Tim Apple',
    job: 'Chief Executive Officer',
    status: 'Active',
    role: 'Admin',
    options: 'Edit',
  },
  {
    name: 'Tim Apple',
    job: 'Chief Executive Officer',
    status: 'Active',
    role: 'Admin',
    options: 'Edit',
  },
  {
    name: 'Tim Apple',
    job: 'Chief Executive Officer',
    status: 'Active',
    role: 'Admin',
    options: 'Edit',
  },
  {
    name: 'Tim Apple',
    job: 'Chief Executive Officer',
    status: 'Active',
    role: 'Admin',
    options: 'Edit',
  },
  {
    name: 'Tim Apple',
    job: 'Chief Executive Officer',
    status: 'Active',
    role: 'Admin',
    options: 'Edit',
  },
];

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

const Header = () =>
  TABLE_HEADER_EXAMPLE.map((header, index) => (
    <TableHeaderCell key={index}>{header}</TableHeaderCell>
  ));

const Template: Story<CustomTableProps> = ({}) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>{Header()}</TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_DATA_EXAMPLE.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.job}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>
                <Link>{item.options}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
