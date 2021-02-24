import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useComponentStyles } from '../theme';
import { Box, Flex } from '../layout';
import { OverlayBox } from '../Menu';
import Portal from '@reach/portal';

const ANIMATION_LENGTH = 200;

export interface ToastItemProps extends Omit<Toast, 'id'> {
  children?: ReactNode;
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
  delay,
  visible: isVisible,
  ...props
}: ToastItemProps) => {
  const componentStyles = useComponentStyles('ToastItem');
  const [visible, setVisible] = useState(false);

  // const total = toasts?.length || 0;
  // const translate = useMemo(() => {
  //   return `translate(0, calc(${90 * index + 1}px + 10px))`;
  // }, [index, total]);

  useEffect(() => {
    setVisible(true);

    // 500ms before the toast is removed, fade it out
    const visibleTimer = window.setTimeout(() => {
      setVisible(false);
      clearTimeout(visibleTimer);
    }, delay - ANIMATION_LENGTH);
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
      transition={`transform ${ANIMATION_LENGTH}ms ease 0ms, visibility ${ANIMATION_LENGTH}ms ease 0ms, opacity ${ANIMATION_LENGTH}ms ease 0ms`}
      transform={visible ? 'translate(0, 0)' : 'translate(0, 40%)'}
      opacity={visible ? 1 : 0}
      width="420px"
      height="75px"
      // position="absolute"
      // top={0}
      // right={0}
      marginTop={0}
      marginBottom="10px"
      {...componentStyles}
      {...props}
    >
      <ToastTitle>{title}</ToastTitle>
      <Box>{children}</Box>
    </OverlayBox>
  );
};

type ToastInput = Pick<Toast, 'body' | 'title' | 'delay'>;

export interface ToastContextValue {
  toasts: Toast[];
  toast?: (newToast: ToastInput) => void;
}

export interface Toast {
  id: string;
  title?: string;
  body?: string;
  delay: number;
  visible: boolean;
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

  function updateToast(newToast: ToastInput) {
    const toastId = `toast-${getId()}`;
    const delay = (newToast.delay || 3000) + ANIMATION_LENGTH;
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
        visible: true,
        cancel: () => cancel(toastId, delay),
      };
      // @ts-ignore
      return [...prevToasts, createdToast];
    });
    const hideToast = (id: string, delay: number) => {
      const hideTimer = window.setTimeout(() => {
        cancel(id, delay);
        clearTimeout(hideTimer);
      }, delay);
    };
    hideToast(toastId, delay);
  }

  return [toasts as Toast[], updateToast] as const;
}

export const ToastContainer = ({ children }) => {
  const [toasts, updateToast] = useToasts();

  return (
    <ToastContext.Provider
      value={{
        toasts: toasts,
        toast: updateToast,
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
          {toasts.map(({ title, body, visible, delay }, index) => (
            <ToastItem
              key={`toast-${index}`}
              title={title}
              delay={delay}
              visible={visible}
              index={index}
            >
              {body}
            </ToastItem>
          ))}
        </Flex>
      </Portal>
    </ToastContext.Provider>
  );
};
