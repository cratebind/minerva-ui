import React from 'react';
import { Code } from '../theme/misc/theme';

export default function CodeSnippet(props) {
  return (
    <pre>
      <Code {...props} />
    </pre>
  );
}
