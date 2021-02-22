import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useComponentStyles } from '../theme';
import { Box, Flex } from '../layout';
import { OverlayBox } from '../Menu';
import Portal from '@reach/portal';

export interface ToastItemProps {
  children?: ReactNode;
  title?: string;
  index?: number;
}

export const ToastTitle = props => {
  const componentStyles = useComponentStyles('ToastTitle');
  return <Box {...componentStyles} {...props} />;
};

const getId = () => {
  return Math.random()
    .toString(32)
    .slice(2, 10);
};

export const ToastItem = ({
  children,
  title,
  index = 0,
  ...props
}: ToastItemProps) => {
  const componentStyles = useComponentStyles('ToastItem');
  const { toasts } = useToastContext();
  const [visible, setVisible] = useState(false);

  const total = toasts?.length || 0;
  const translate = useMemo(() => {
    return `translate(0, calc(${90 * index + 1}px + 10px))`;
  }, [index, total]);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <OverlayBox
      _after={{
        content: `''`,
        boxShadow: '0 0 0 1px rgba(0,0,0,.05)',
        borderRadius: '6px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      transition="transform 400ms ease 0ms, visibility 200ms ease 0ms, opacity 200ms ease 0ms"
      transform={visible ? translate : 'translate(0, -100%)'}
      width="420px"
      height="75px"
      position="absolute"
      top={0}
      right={0}
      marginTop={0}
      marginBottom="10px"
      // onAnimationEnd={() => console.log('ANIMATION ENDED')}
      {...componentStyles}
      {...props}
    >
      <ToastTitle>{title}</ToastTitle>
      <Box>{children}</Box>
    </OverlayBox>
  );
};

export interface ToastContextValue {
  toasts: any[];
  toast?: any;
}

export interface Toast {
  id: string;
  title?: string;
  body?: string;
  delay?: number;
}

// const initialContextValue: ToastContextValue = {
//   toasts: [],
// };

export const ToastContext = createContext<ToastContextValue>({
  toasts: [],
});

export function useToastContext(): ToastContextValue {
  return useContext(ToastContext) as ToastContextValue;
}

export function useToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function updateToast(newToast: Toast) {
    const toastId = `toast-${getId()}`;
    const delay = newToast.delay || 3000;
    // @ts-ignore
    const cancel = (id: string, delay: number) => {
      setToasts((prevToasts: Toast[]) => {
        return prevToasts.filter(item => item.id !== id);
      });
    };
    setToasts((prevToasts: Toast[]) => {
      const createdToast = {
        ...newToast,
        id: toastId,
        delay: delay,
        cancel: () => cancel(toastId, delay),
      };
      return [createdToast, ...prevToasts];
    });
    const hideToast = (id: string, delay: number) => {
      const hideTimer = window.setTimeout(() => {
        cancel(id, delay);
        clearTimeout(hideTimer);
      }, delay);
    };
    hideToast(toastId, delay);
    setToasts(prevToasts => [newToast, ...prevToasts]);
  }

  return [toasts, updateToast];
}

export const ToastContainer = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function toast(newToast: Toast) {
    setToasts(prevToasts => [newToast, ...prevToasts]);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts: toasts,
        toast: toast,
      }}
    >
      {children}
      <Portal>
        <Flex
          flexDirection="column"
          position="absolute"
          top="10px"
          right="10px"
        >
          {toasts.map(({ title, body }, index) => (
            <ToastItem key={`toast-${index}`} title={title} index={index}>
              {body}
            </ToastItem>
          ))}
        </Flex>
      </Portal>
    </ToastContext.Provider>
  );
};
