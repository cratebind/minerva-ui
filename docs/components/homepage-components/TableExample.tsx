import {
  Box,
  Flex,
  Text,
  Image,
  Tag,
  Table,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableCell,
  styled,
} from 'minerva-ui';

const TableContainer = styled(Box)`
  filter: drop-shadow(40px 40px 60px rgba(0, 0, 0, 0.1));
  > div {
    overflow: hidden;
  }
`;

const TableRowSection = () => (
  <TableRow>
    <TableCell style={{ minWidth: '180px' }}>
      <Flex alignItems="center">
        <Image
          src="tim_profile.png"
          maxWidth="32px"
          maxHeight="32px"
          width="100%"
          alt="tim avatar"
        />
        <Box ml="2">
          <Text fontSize="xs" lineHeight="16px" fontWeight="bold">
            Tim Apple
          </Text>
          <Text fontSize="xs" lineHeight="16px" color="#BAB9BD">
            timapple@gmail.com
          </Text>
        </Box>
      </Flex>
    </TableCell>
    <TableCell>
      <Text fontSize="xs" lineHeight="20px" fontWeight="bold">
        Chief Executive Officer
      </Text>
      <Text fontSize="xs" lineHeight="20px" color="#BAB9BD">
        Human Resources
      </Text>
    </TableCell>
    <TableCell style={{ paddingLeft: '8px' }}>
      <Tag
        background="#C8E6C9"
        width="70px"
        borderRadius="100px"
        py="1"
        pl="3"
        fontSize="xs"
      >
        Tag Label
      </Tag>
    </TableCell>
  </TableRow>
);

export default function TableExample() {
  return (
    <TableContainer width="100%">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell style={{ minWidth: '160px' }}>Job</TableHeaderCell>
            <TableHeaderCell style={{ paddingLeft: '8px' }}>
              Status
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRowSection />
          <TableRowSection />
          <TableRowSection />
          <TableRowSection />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
