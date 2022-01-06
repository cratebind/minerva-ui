import { Box, Flex, Heading } from 'minerva-ui';
import { DocSearch } from '@docsearch/react';

import Search, {
  DOC_SEARCH_API_KEY,
  DOC_SEARCH_INDEX_NAME,
} from '../theme/search';

import '@docsearch/css';

export default function HomePage() {
  return (
    <Box bg="#EEEEEE" minHeight="100vh">
      <Flex
        as="nav"
        py="40px"
        maxWidth="960px"
        width="100%"
        mx="auto"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Heading as="h2">Minerva UI</Heading>
          <DocSearch
            apiKey={DOC_SEARCH_API_KEY}
            indexName={DOC_SEARCH_INDEX_NAME}
          />
        </Flex>
        <Flex>Links</Flex>
      </Flex>

      <Box>Hero Headline</Box>
    </Box>
  );
}
