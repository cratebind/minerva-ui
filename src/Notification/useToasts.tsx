import React, { useEffect, useState } from 'react';
// import useCurrentState from '../utils/use-current-state'
// import { ToastWithID } from './toast-container'
// import { getId } from '../utils/collections'
import { NormalTypes, Toast, ToastWithID, useToastContext } from '.';
import useCurrentState from './useCurrentState';

export interface ToastAction {
  name: string;
  handler: (
    event: React.MouseEventHandler<HTMLButtonElement>,
    cancel: Function
  ) => void;
  passive?: boolean;
}

const defaultToast = {
  delay: 2000,
};

let destoryStack: Array<string> = [];
let maxDestoryTime: number = 0;
let destoryTimer: number | undefined;

const useToasts = (): [Array<Toast>, (t: Toast) => void] => {
  const { updateToasts, toastHovering, toasts } = useToastContext();
  const [, setHovering, hoveringRef] = useCurrentState(toastHovering);

  useEffect(() => setHovering(toastHovering), [toastHovering]);

  const destoryAll = (delay: number, time: number) => {
    /* istanbul ignore next */
    if (time <= maxDestoryTime) return;
    clearTimeout(destoryTimer);
    maxDestoryTime = time;

    destoryTimer = window.setTimeout(() => {
      /* istanbul ignore next */
      updateToasts((currentToasts: Array<ToastWithID>) => {
        if (destoryStack.length < currentToasts.length) {
          return currentToasts;
        }
        destoryStack = [];
        return [];
      });
      clearTimeout(destoryTimer);
    }, delay + 350);
  };

  const setToast = (toast: Toast): void => {
    const id = `toast-${Math.random()
      .toString(32)
      .slice(2, 10)}`;
    const delay = toast.delay || defaultToast.delay;

    const cancel = (id: string, delay: number) => {
      console.log(`CLOSING TOAST: ${id}`);
      updateToasts((currentToasts: Array<ToastWithID>) => {
        console.log({ currentToasts });
        return currentToasts.map(item => {
          if (item.id !== id) return item;
          return { ...item, willBeDestroy: true };
        });
      });
      destoryStack.push(id);
      destoryAll(delay, performance.now());
    };

    updateToasts((currentToasts: Array<ToastWithID>) => {
      const newToast = {
        ...toast,
        id,
        delay,
        cancel: () => cancel(id, delay),
      };
      return [...currentToasts, newToast];
    });

    const hideToast = (id: string, delay: number) => {
      const hideTimer = window.setTimeout(() => {
        if (hoveringRef.current) {
          hideToast(id, delay);
          return clearTimeout(hideTimer);
        }
        cancel(id, delay);
        clearTimeout(hideTimer);
      }, delay);
    };

    hideToast(id, delay);
  };

  return [toasts, setToast];
};

export default useToasts;
