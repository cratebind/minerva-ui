import { useState, useCallback } from 'react';
import copy from 'copy-to-clipboard';

export function useClipboard(value) {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    const didCopy = copy(value);
    setHasCopied(didCopy);
  }, [value]);

  return { value, onCopy, hasCopied };
}

export default useClipboard;
