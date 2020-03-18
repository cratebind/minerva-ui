import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '../src';

const UtilityTable = ({ themeProperty }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Key</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(themeProperty).map(([property, value]) => (
          <TableRow>
            <TableCell>
              <pre>{property}</pre>
            </TableCell>
            <TableCell>
              {value}
              {/* {typeof value === 'string' ? (
                <ColorTag
                  color={
                    ['transparent', '#fff'].includes(value) ? '#000' : '#fff'
                  }
                  code={value}
                >
                  {value}
                </ColorTag>
              ) : (
                Object.entries(value).map(([number, code]) => (
                  <ColorTag number={number} code={code}>
                    {number}: {code}
                  </ColorTag>
                ))
              )} */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UtilityTable;
