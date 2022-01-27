import { Flex, Heading } from 'minerva-ui';
import { DocSearch } from '@docsearch/react';

import { DOC_SEARCH_API_KEY, DOC_SEARCH_INDEX_NAME } from '../../theme/search';

export default function DocSearchComponent() {
  return (
    <Flex alignItems="center">
      <Heading as="h2">Minerva UI</Heading>
      <DocSearch
        apiKey={DOC_SEARCH_API_KEY}
        indexName={DOC_SEARCH_INDEX_NAME}
      />
    </Flex>
  );
}
