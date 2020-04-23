import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Box, systemProps } from '../layout';

export const TableContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

// export const StyledTable = styled(Box)(
//   {
//     // backgroundColor: '#525252',

//     minWidth: '100%',
//     borderCollapse: 'collapse',
//   },
//   systemProps
// );

export const StyledTable = forwardRef(function SyledTable(
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
    color: '#6b7280',
    backgroundColor: '#f9fafb',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '0.6px',
    textAlign: 'left',
    border: 0,
    borderBottom: '1px solid #e5e7eb',
  },
  systemProps
);

export const TableCell = styled('td')(
  {
    padding: '16px 24px',
    color: '#161e2e',
    backgroundColor: '#fff',
    fontSize: '14px',
    border: 0,
    borderBottom: '1px solid #e5e7eb',
  },
  systemProps
);

export const TableRow = styled('tr')(
  {
    border: 0,
  },
  systemProps
);

export interface CustomTableProps
  extends React.ButtonHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
}

export type Ref = HTMLTableElement;

export const Table = forwardRef<Ref, CustomTableProps>(
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
