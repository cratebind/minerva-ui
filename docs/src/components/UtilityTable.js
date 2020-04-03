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
      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Key</TableHeaderCell>
            <TableHeaderCell>CSS Value</TableHeaderCell>
            <TableHeaderCell>Example</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(themeProperty).map(([property, value]) => (
            <TableRow>
              <TableCell>
                <Box as="pre" bg="#f5f6f7">
                  {property}
                </Box>
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
