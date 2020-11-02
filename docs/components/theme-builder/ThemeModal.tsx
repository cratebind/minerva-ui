import React, { useRef } from 'react';
import {
  Button,
  styled,
  Text,
  Box,
  Flex,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from 'minerva-ui';
import { useAppContext } from './AppContext';

const isBrowser = typeof window !== `undefined`;

const StyledDialog = styled(Modal)`
  position: relative;
  /* padding: 20px; */
  border-radius: 0.25rem;
`;

export default function ThemeModal(props) {
  const { state, setContext } = useAppContext();
  const inputRef = useRef();
  const { modalOpen, activeComponent, ...styles } = state;
  const close = () => setContext({ modalOpen: false });

  const filteredStyles = Object.entries(styles).reduce(
    (result, [key, value]) => {
      // filter out custom props key
      const { customProps, ...rest } = value;
      result[key] = { ...rest };
      return result;
    },
    {}
  );

  const copyStyle = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };

  const data = isBrowser
    ? new Blob([JSON.stringify(filteredStyles)], {
        type: 'text/plain;charset=utf-8',
      })
    : {};

  // create ObjectURL to use for downloading
  const url = isBrowser ? window.URL.createObjectURL(data) : '';

  return (
    <StyledDialog
      isOpen={modalOpen}
      onClose={close}
      aria-labelledby="theme_dialog"
    >
      <ModalHeader onClose={close}>
        <Text fontSize="20px" fontWeight={700}>
          Export Theme
        </Text>
      </ModalHeader>
      {/* <Button
        position="absolute"
        right="10px"
        top="10px"
        border="0"
        p={2}
        onClick={close}
      >
        <svg
          viewBox="0 0 24 24"
          height="12px"
          width="12px"
          focusable="false"
          role="presentation"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
          />
        </svg>
      </Button> */}

      <ModalBody>
        <Box>
          <Input
            ref={inputRef}
            as="textarea"
            value={JSON.stringify(filteredStyles, null, 2)}
            rows="6"
          />
        </Box>
        <a
          href={url}
          download="theme.json"
          style={{ display: 'none' }}
          aria-label="Hidden download theme link"
          id="download-link"
        >
          Download Theme File
        </a>
      </ModalBody>
      <Flex px={6} pb={4} justifyContent="flex-end">
        <Button
          onClick={() => {
            document.querySelector('#download-link').click();
          }}
          mr={2}
        >
          Download Theme
        </Button>
        <Button onClick={copyStyle}>Copy to Clipboard</Button>
      </Flex>
    </StyledDialog>
  );
}
