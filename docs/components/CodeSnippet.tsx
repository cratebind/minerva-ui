import React from 'react';
import { Box } from 'minerva-ui';
import { Code } from '../theme/misc/theme';

export default function CodeSnippet(props) {
  return (
    <Box as="pre" background={props?.snippetBackground}>
      <Code {...props} />
    </Box>
  );
}
