import React, { useEffect, useMemo, useState } from 'react';
// import useTheme from '../styles/use-theme'
import Button from '../Button';
// import { NormalTypes } from '../utils/prop-types'
import { Toast } from '.';
import { Box } from '../layout';

type ToastWithID = Toast & {
  id: string;
  willBeDestroy?: boolean;
  cancel: Function;
};

export interface ToastItemProps {
  index: number;
  total: number;
  toast: ToastWithID;
  onHover: boolean;
}

const toastActions = (actions: Toast['actions'], cancelHandle: Function) => {
  const handler = (
    event: React.MouseEvent<HTMLButtonElement>,
    userHandler: Function
  ) => {
    userHandler && userHandler(event, cancelHandle);
  };
  if (!actions || !actions.length) return null;
  return actions.map((action, index) => (
    <Button
      auto
      size="mini"
      // type={action.passive ? 'default' : 'secondary'}
      key={`action-${index}`}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
        handler(event, action.handler)
      }
    >
      {action.name}
    </Button>
  ));
};

const ToastItem: React.FC<ToastItemProps> = React.memo(
  ({ index, total, toast, onHover }) => {
    // const theme = useTheme()
    // const { color, bgColor } = useMemo(() => getColors(theme.palette, toast.type), [
    //   theme.palette,
    //   toast.type,
    // ])
    const [visible, setVisible] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(false);
    const reverseIndex = useMemo(() => total - (index + 1), [total, index]);
    const translate = useMemo(() => {
      const calc = `100% + -75px + -${20 * reverseIndex}px`;
      if (reverseIndex >= 4)
        return `translate3d(0, -75px, -${reverseIndex}px) scale(.7)`;
      if (onHover) {
        return `translate3d(0, ${reverseIndex *
          -75}px, -${reverseIndex}px) scale(${total === 1 ? 1 : 0.98205})`;
      }
      return `translate3d(0, calc(${calc}), -${reverseIndex}px) scale(${1 -
        0.05 * reverseIndex})`;
    }, [onHover, index, total, reverseIndex]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
        clearTimeout(timer);
      }, 10);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      let unMount = false;
      const shouldBeHide = reverseIndex > 2 || toast.willBeDestroy;
      if (!shouldBeHide || unMount) return;
      const timer = setTimeout(() => {
        setHide(true);
        clearTimeout(timer);
      }, 150);
      return () => {
        unMount = true;
        clearTimeout(timer);
      };
    }, [reverseIndex, toast.willBeDestroy]);
    /* istanbul ignore next */
    if (reverseIndex > 10) return null;

    const visibleProps = visible ? { opacity: 1, transform: translate } : {};
    const hiddenProps = hide
      ? { opacity: 0, visibility: 'hidden', pointerEvents: 'none' }
      : {};

    const messageStyles = {
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 2,
      // '-webkit-box-orient': 'vertical',
      // '-webkit-line-clamp': 2,
    };

    return (
      <Box
        key={`${toast.id}-${index}`}
        width="420px"
        maxWidth="90vw"
        maxHeight="75px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border={0}
        borderRadius="5px"
        padding="21px"
        position="absolute"
        bg="#fff"
        bottom={0}
        right={0}
        opacity={reverseIndex > 4 ? 0 : 1}
        // className={`toast ${visible ? 'visible' : ''} ${hide ? 'hide' : ''}`}
        boxShadow={reverseIndex > 4 ? 'none' : '0 5px 10px rgba(0, 0, 0, 0.12)'}
        transform="translate3d(0, 100%, 0px) scale(1)"
        transition="transform 400ms ease 0ms, visibility 200ms ease 0ms, opacity 200ms ease 0ms"
        {...visibleProps}
        {...hiddenProps}
      >
        <Box
          display="-webkit-box"
          alignItems="center"
          height="100%"
          transition="opacity 0.4 ease"
          wordBreak="break-all"
          overflow="hidden"
          maxHeight="100%"
          textOverflow="ellipsis"
          // {...messageStyles}
          style={messageStyles}
        >
          {toast.text}
        </Box>
        <div className="action">
          {toastActions(toast.actions, toast.cancel)}
        </div>
        {/* <style jsx>{`
        .message {
          align-items: center;
          height: 100%;
          transition: opacity 0.4s ease;
          font-size: 0.875rem;
          display: -webkit-box;
          word-break: break-all;
          padding-right: ${theme.layout.gapHalf};
          overflow: hidden;
          max-height: 100%;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          line-height: 1.1rem;
        }
        .toast :global(button + button) {
          margin-left: ${theme.layout.gapQuarter};
        }
      `}</style> */}
      </Box>
    );
  }
);

export default ToastItem;
