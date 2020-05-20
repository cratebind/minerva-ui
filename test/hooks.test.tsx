import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import {
  ThemeProvider,
  Text,
  Button,
  Input,
  Box,
  Drawer,
  useLocalStorage,
  useClipboard,
  useMedia,
  useNetwork,
  useDisclosure,
} from '../src';

/**
 * Custom Hooks Tests
 */

const ClipboardComponent = () => {
  const value = 'Hello World';
  const { onCopy, hasCopied } = useClipboard(value);

  return (
    <>
      <Button onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</Button>
      <Input data-testid="paste-field" />
    </>
  );
};

describe('useClipboard', () => {
  it('should render Clipboard Component', () => {
    const { container } = render(
      <ThemeProvider>
        <ClipboardComponent />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should copy content to clipboard', () => {
    const value = 'Hello World';
    const { getByRole, getByTestId } = render(
      <ThemeProvider>
        <ClipboardComponent />
      </ThemeProvider>
    );

    const copyBtn = getByRole('button');
    const pasteInput = getByTestId('paste-field');

    fireEvent.click(copyBtn);
    fireEvent.paste(pasteInput, { target: { value } });
    expect(pasteInput).toHaveValue(value);
  });
});

const LocalStorageComponent = () => {
  const [count, setCount] = useLocalStorage('click-count', 0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>Add To Count</Button>
      <Text>You've clicked the button {count} times.</Text>
    </>
  );
};

describe('useLocalStorage', () => {
  it('should render Local Storage Component', () => {
    const { container } = render(
      <ThemeProvider>
        <LocalStorageComponent />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should save data in local storage', () => {
    const { getByRole, container } = render(
      <ThemeProvider>
        <LocalStorageComponent />
      </ThemeProvider>
    );
    expect(container).toHaveTextContent("You've clicked the button 0 times.");
    const btn = getByRole('button');
    fireEvent.click(btn);
    expect(container).toHaveTextContent("You've clicked the button 1 times.");
  });
});

const MediaComponent = () => {
  const small = useMedia({ maxWidth: 640 });

  return <Box data-testid="media-box" height={100} width={small ? 100 : 500} />;
};

describe('useMedia', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true, // Causes all media queries to return true
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      }),
    });
  });

  it('should render Local Storage Component', () => {
    const { container } = render(
      <ThemeProvider>
        <MediaComponent />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should pass style rules', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <MediaComponent />
      </ThemeProvider>
    );

    const box = getByTestId('media-box');
    expect(box).toHaveStyleRule('width', '100px');
  });
});

const NetworkComponent = () => {
  const online = useNetwork();

  return <Text>Network {online ? 'Online' : 'Offline'}</Text>;
};

describe('useNetwork', () => {
  it('should render Network Component', () => {
    const { container } = render(
      <ThemeProvider>
        <NetworkComponent />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should show "online"', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);
    const { container } = render(
      <ThemeProvider>
        <NetworkComponent />
      </ThemeProvider>
    );
    expect(container).toHaveTextContent('Network Online');
  });

  it('should show "offline"', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
    const { container } = render(
      <ThemeProvider>
        <NetworkComponent />
      </ThemeProvider>
    );
    expect(container).toHaveTextContent('Network Offline');
  });
});

const DisclosureComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer
        data-testid="drawer"
        isOpen={isOpen}
        onClose={onClose}
        overflow="hidden"
      />
    </>
  );
};

describe('useDisclosure', () => {
  it('should render Disclosure Component', () => {
    const { container } = render(
      <ThemeProvider>
        <DisclosureComponent />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should open drawer', () => {
    const { getByRole, queryByTestId } = render(
      <ThemeProvider>
        <DisclosureComponent />
      </ThemeProvider>
    );

    const btn = getByRole('button');
    expect(queryByTestId('drawer')).toBeNull();
    fireEvent.click(btn);
    expect(queryByTestId('drawer')).toBeTruthy();
  });
});
