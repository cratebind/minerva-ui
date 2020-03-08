import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { styledSystemUtilities } from '../utils';
import { Box } from '../layout';

const TableContainer = styled.div`
  /* border: 1px solid #e5e7eb; */
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const StyledTable = styled(Box)(
  {
    // backgroundColor: '#525252',

    minWidth: '100%',
    borderCollapse: 'collapse',
  },
  ...styledSystemUtilities
);

export const TableHeader = styled('thead')(
  {
    // backgroundColor: '#6b7280',
  },
  ...styledSystemUtilities
);

export const TableFooter = styled('thead')(
  {
    // backgroundColor: '#6b7280',
  },
  ...styledSystemUtilities
);

export const TableBody = styled('tbody')(
  {
    // backgroundColor: '#6b7280',
  },
  ...styledSystemUtilities
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
    borderBottom: '1px solid #e5e7eb',
  },
  ...styledSystemUtilities
);

export const TableCell = styled('td')(
  {
    padding: '16px 24px',
    color: '#161e2e',
    backgroundColor: '#fff',
    fontSize: '14px',
    borderBottom: '1px solid #e5e7eb',
  },
  ...styledSystemUtilities
);

export const TableRow = styled('tr')({}, ...styledSystemUtilities);

export interface CustomTableProps
  extends React.ButtonHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
}

export type Ref = HTMLTableElement;

const Table = forwardRef<Ref, CustomTableProps>(
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

// Table.Body = TableBody;
// Table.Cell = TableCell;
// Table.Footer = TableFooter;
// Table.Header = TableHeader;
// Table.HeaderCell = TableHeaderCell;
// Table.Row = TableRow;

export default Table;
// export {
//   TableBody,
//   TableCell,
//   TableFooter,
//   TableHeader,
//   TableHeaderCell,
//   TableRow,
// };
