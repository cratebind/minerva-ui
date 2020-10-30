import React from 'react';
import {
  Box,
  StyledTable,
  TableContainer,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from 'minerva-ui';

const UtilityTable = ({ themeProperty, renderValue }) => {
  return (
    <TableContainer style={{ overflow: 'hidden' }}>
      <StyledTable display="table" borderColor="transparent">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Key</TableHeaderCell>
            <TableHeaderCell>CSS Value</TableHeaderCell>
            <TableHeaderCell>Example</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(themeProperty).map(([property, value]) => (
            <TableRow key={property}>
              <TableCell>
                <Box as="pre" bg="#f5f6f7">
                  {property}
                </Box>
              </TableCell>
              <TableCell>{value}</TableCell>
              {renderValue && (
                <TableCell>{renderValue({ property, value })}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default UtilityTable;

// return (
//   <>
//     <Heading fontSize="xl">{color}</Heading>
//     <UtilityTable themeProperty={value} />
//   </>
// )
