import { useState, useCallback } from 'react';

const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(Boolean(initialState));
  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onToggle = useCallback(() => setIsOpen(prevIsOpen => !prevIsOpen), []);
  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
