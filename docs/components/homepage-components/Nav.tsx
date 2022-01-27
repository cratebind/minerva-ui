import { Flex, Link, Text } from 'minerva-ui';
import DocSearch from './DocSearch';

export default function Nav() {
  return (
    <Flex
      as="nav"
      py="40px"
      maxWidth="1200px"
      width="100%"
      mx="auto"
      justifyContent="space-between"
    >
      <DocSearch />
      <Flex alignItems="center">
        <Flex
          borderRight="1px solid #DEDEE0"
          height="max-content"
          mr="8"
          py="2"
        >
          <Link
            color="secondary"
            mr="8"
            textDecoration="none"
            height="max-content"
          >
            Get Started
          </Link>
          <Link
            color="secondary"
            mr="8"
            textDecoration="none"
            height="max-content"
          >
            About
          </Link>
        </Flex>
        <Text>Github logo</Text>
      </Flex>
    </Flex>
  );
}
