import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { forwardRefWithAs } from '../type-utilities';
import { Box, MinervaProps, systemProps } from '../layout';

export const TableContainer = styled('div')({
  'border-radius': '5px',
  overflow: 'auto',
  border: '1.5px solid #E0E0E0',
  // 'tr:nth-child(odd)': {
  //   background: props.alternateRowsBackground === 'odd' ? '#FAFAFA' : '#FFF',
  // },
  // 'tr:nth-child(even)': {
  //   background: props.alternateRowsBackground === 'even' ? '#FAFAFA' : '#FFF',
  // },
});

// export const StyledTable = styled(Box)(
//   {
//     // backgroundColor: '#525252',

//     minWidth: '100%',
//     borderCollapse: 'collapse',
//   },
//   systemProps
// );

export const StyledTable = forwardRefWithAs<any, 'table'>(function SyledTable(
  props: any,
  ref: any
) {
  return (
    <Box
      as="table"
      ref={ref}
      margin={0}
      minWidth="100%"
      borderCollapse="collapse"
      display="table"
      {...props}
    />
  );
});

export const TableHeader = styled('thead')(
  {
    // backgroundColor: '#6b7280',
  },
  systemProps
);

export const TableFooter = styled('thead')(
  {
    // backgroundColor: '#6b7280',
  },
  systemProps
);

export const TableBody = styled('tbody')(
  {
    // backgroundColor: '#6b7280',
  },
  systemProps
);

export const TableHeaderCell = styled('th')(
  {
    padding: '12px 24px',
    color: '#000',
    backgroundColor: '#F5F5F5',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '11.26px',
    letterSpacing: '0.6px',
    textAlign: 'left',
    border: 0,
    // borderBottom: '1.5px solid #E0E0E0',
  },
  systemProps
);

export const TableCell = styled('td')(
  {
    padding: '16px 24px',
    color: '#000',
    fontSize: '12px',
    lineHeight: '13.51px',
    border: 0,
    borderTop: '1.5px solid #E0E0E0',
  },
  systemProps
);

export const TableRow = styled('tr')({}, systemProps);

export interface CustomTableProps
  extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
}

export type Ref = HTMLTableElement;

export const Table = forwardRef<Ref, CustomTableProps & MinervaProps>(
  ({ children, ...props }, ref) => {
    return (
      <TableContainer>
        <StyledTable as="table" ref={ref} {...props}>
          {children}
        </StyledTable>
      </TableContainer>
    );
  }
);

Table.displayName = 'Table';

export default Table;

// if (__DEV__) {
//   Table.propTypes = {
//     children: PropTypes.node,
//   };
// }
