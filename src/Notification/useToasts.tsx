import React, { useEffect, useState } from 'react';
// import useCurrentState from '../utils/use-current-state'
// import { ToastWithID } from './toast-container'
// import { getId } from '../utils/collections'
import { NormalTypes, ToastWithID, useToastContext } from '.';
import useCurrentState from './useCurrentState';

export interface ToastAction {
  name: string;
  handler: (
    event: React.MouseEventHandler<HTMLButtonElement>,
    cancel: Function
  ) => void;
  passive?: boolean;
}

export interface Toast {
  text?: string | React.ReactNode;
  type?: NormalTypes;
  delay?: number;
  actions?: Array<ToastAction>;
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
    console.log('SETTING TOAST');
    const id = `toast-${Math.random()
      .toString(32)
      .slice(2, 10)}`;
    const delay = toast.delay || defaultToast.delay;

    const cancel = (id: string, delay: number) => {
      updateToasts((currentToasts: Array<ToastWithID>) => {
        return currentToasts.map(item => {
          if (item.id !== id) return item;
          return { ...item, willBeDestroy: true };
        });
      });
      destoryStack.push(id);
      destoryAll(delay, performance.now());
    };

    updateToasts((currentToasts: Array<ToastWithID>) => {
      console.log('STARTING UPDATE TOAST');
      const newToast = {
        ...toast,
        id,
        delay,
        cancel: () => cancel(id, delay),
      };
      console.log({ newToast });
      return [...currentToasts, newToast];
    });

    const hideToast = (id: string, delay: number) => {
      console.log('STARTING HIDE TOAST');
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

  console.log({ toasts });

  return [toasts, setToast];
};

export default useToasts;
