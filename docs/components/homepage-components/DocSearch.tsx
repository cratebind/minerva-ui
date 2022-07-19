import { Flex, Image, styled } from 'minerva-ui';
import { DocSearch } from '@docsearch/react';

import { DOC_SEARCH_API_KEY, DOC_SEARCH_INDEX_NAME } from '../../theme/search';

interface Props {
  secondary: number;
}

const DocContainer = styled(Flex)<Props>`
  @media (max-width: 640px) {
    margin-top: ${({ secondary }) => secondary && '1rem'};
    width: ${({ secondary }) => secondary && '100%'};
    margin-left: ${({ secondary }) => !secondary && 'auto'};
    margin-right: ${({ secondary }) => !secondary && '2.5rem'};

    button {
      margin-left: ${({ secondary }) => secondary && '0'};
      width: ${({ secondary }) => secondary && '100%'};
      background: ${({ secondary }) => !secondary && 'transparent !important'};
    }
  }
`;

export default function DocSearchComponent({ type }: { type?: string }) {
  const isFooter = type === 'footer';
  return (
    <Flex
      className={`items-start ${
        isFooter ? 'flex-col' : 'flex-row'
      } w-full sm:items-center sm:flex-row w-max`}
    >
      <Image
        src={isFooter ? 'minerva_logo_white.png' : 'minerva_logo_purple.png'}
      />
      <DocContainer secondary={isFooter ? 1 : 0}>
        <DocSearch
          apiKey={DOC_SEARCH_API_KEY}
          indexName={DOC_SEARCH_INDEX_NAME}
        />
      </DocContainer>
    </Flex>
  );
}
