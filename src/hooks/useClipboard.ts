import { useState, useEffect, useCallback } from 'react';
import copy from 'copy-to-clipboard';

// Heavily influenced by Chakra UI hook:
// https://github.com/chakra-ui/chakra-ui/blob/master/packages/chakra-ui/src/useClipboard/index.js
function useClipboard(value) {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    const didCopy = copy(value);
    setHasCopied(didCopy);
  }, [value]);

  useEffect(() => {
    if (hasCopied) {
      const id = setTimeout(() => {
        setHasCopied(false);
      }, 1500);

      return () => clearTimeout(id);
    }

    return;
  }, [hasCopied]);

  return { value, onCopy, hasCopied };
}

export default useClipboard;
