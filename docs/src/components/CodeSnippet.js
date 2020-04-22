import React from 'react';

export default function CodeSnippet(props) {
  return (
    <code
      className="language-json"
      style={{ whiteSpace: 'pre-wrap' }}
      {...props}
    />
  );
}
