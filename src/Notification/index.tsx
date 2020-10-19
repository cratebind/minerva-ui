import Portal from '@reach/portal';
import { Box } from '../layout';
import React, { PropsWithChildren, useMemo, useRef, useState } from 'react';
// import { createPortal } from 'react-dom'
// import { useTheme } from 'styled-components'
// import usePortal from '../utils/use-portal'
// import useTheme from '../styles/use-theme'
import ToastItem from './notification-item';
import useCurrentState from './useCurrentState';

export const tuple = <T extends string[]>(...args: T) => args;

const normalTypes = tuple(
  'default',
  'secondary',
  'success',
  'warning',
  'error'
);
export type NormalTypes = typeof normalTypes[number];

export interface ToastAction {
  name: string;
  handler: (
    event: React.MouseEventHandler<HTMLButtonElement>,
    cancel: Function
  ) => void;
  passive?: boolean;
}

export interface Toast {
  title?: string | React.ReactNode;
  text?: string | React.ReactNode;
  type?: NormalTypes;
  delay?: number;
  actions?: Array<ToastAction>;
}

const defaultToast = {
  delay: 2000,
};

export type ToastWithID = Toast & {
  id: string;
  willBeDestroy?: boolean;
  cancel: Function;
};

export type UpdateToastsFunction<T> = (
  fn: (toasts: Array<T>) => Array<T>
) => any;

export interface ContextParams {
  toasts: Array<ToastWithID>;
  toastHovering: boolean;
  updateToasts: UpdateToastsFunction<ToastWithID>;
  updateToastHoverStatus: Function;
}

const defaultParams: ContextParams = {
  toasts: [],
  toastHovering: false,
  updateToasts: t => t,
  updateToastHoverStatus: () => {},
};

export const Content: React.Context<ContextParams> = React.createContext<
  ContextParams
>(defaultParams);

export const useToastContext = (): ContextParams =>
  React.useContext<ContextParams>(Content);

export const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts, toastsRef] = useCurrentState([]);
  const [toastHovering, setToastHovering] = useState<boolean>(false);
  const updateToasts: UpdateToastsFunction<ToastWithID> = (
    fn: (toasts: ToastWithID[]) => ToastWithID[]
  ) => {
    const nextToasts = fn(toastsRef.current);
    setToasts(nextToasts);
  };

  const updateToastHoverStatus = (fn: () => boolean) => {
    const nextHoverStatus = fn();
    setToastHovering(nextHoverStatus);
  };

  const initialValue = useMemo<ContextParams>(
    () => ({
      toasts,
      toastHovering,
      updateToasts,
      updateToastHoverStatus,
    }),
    [toasts, toastHovering]
  );

  return (
    <Content.Provider value={initialValue}>
      {children}
      <ToastContainer />
    </Content.Provider>
  );
};

const ToastContainer: React.FC<React.PropsWithChildren<{}>> = () => {
  // const portal = usePortal('toast')
  // const theme = useTheme()
  const [hover, setHover] = useState<boolean>(false);
  const timer = useRef<number | undefined>();
  const { toasts, updateToastHoverStatus } = useToastContext();
  console.log({ toasts });
  const toastElements = useMemo(
    () =>
      toasts.map((t, i) => (
        <ToastItem
          index={i}
          total={toasts.length}
          toast={t}
          onHover={hover}
          key={`toast-${i}`}
        />
      )),
    [toasts, hover]
  );
  const hoverHandler = (onHover: boolean) => {
    if (onHover) {
      timer.current && clearTimeout(timer.current);
      updateToastHoverStatus(() => true);
      return setHover(true);
    }
    timer.current = window.setTimeout(() => {
      setHover(false);
      updateToastHoverStatus(() => false);
      timer.current && clearTimeout(timer.current);
    }, 200);
  };

  // console.log({ toasts, toastElements });
  if (!toasts || toasts.length === 0) return null;

  const hoverStyles = hover ? { transform: 'translate3d(0, -10px, 0)' } : {};

  return (
    <Portal>
      <Box
        className={`toast-container ${hover ? 'hover' : ''}`}
        onMouseEnter={() => hoverHandler(true)}
        onMouseLeave={() => hoverHandler(false)}
        position="fixed"
        width="420px"
        maxWidth="90vw"
        top="22px"
        right="22px"
        zIndex={2000}
        transition="all 400ms ease"
        boxSizing="border-box"
        // {...hoverStyles}
      >
        {toastElements}
        {/* <style jsx>{`
          .toast-container {
            position: fixed;
            width: 420px;
            max-width: 90vw;
            z-index: 2000;
            transition: all 400ms ease;
            box-sizing: border-box;
          }
          .toast-container.hover {
            transform: translate3d(0, -10px, 0);
          }
        `}</style> */}
      </Box>
    </Portal>
  );
};

export default ToastContainer;
