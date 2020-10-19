import React, { useEffect, useMemo, useState } from 'react';
import { X } from 'react-feather';
// import useTheme from '../styles/use-theme'
import Button from '../Button';
// import { NormalTypes } from '../utils/prop-types'
import { Toast } from '.';
import { Box } from '../layout';
import Text from '../Text';

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
  // if (!actions || !actions.length) return null;
  return (
    <>
      {actions?.map((action, index) => (
        <Button
          size="sm"
          // type={action.passive ? 'default' : 'secondary'}
          key={`action-${index}`}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handler(event, action.handler)
          }
        >
          {action.name}
        </Button>
      ))}
    </>
  );
};

const TOAST_OFFSET_VALUE = -10;
const TOAST_OFFSET = `${TOAST_OFFSET_VALUE}px`;

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
      // @TODO: this probably isn't the best / safest way to do this with CSS...
      const calc = `${reverseIndex}00% + ${reverseIndex * 10}px`;
      // const calc = `0% + ${TOAST_OFFSET} + -${20 * reverseIndex}px`;
      // const calc = `0% + ${TOAST_OFFSET} + 100% * ${reverseIndex}`;
      // const calc = `${reverseIndex} * 100%`;
      // const calc = `0% + ${TOAST_OFFSET}`;
      // if (reverseIndex >= 4)
      //   return `translate3d(0, ${TOAST_OFFSET}, -${reverseIndex}px)`;
      // if (onHover) {
      //   return `translate3d(0, ${reverseIndex *
      //     TOAST_OFFSET_VALUE}px, -${reverseIndex}px)`;
      // }
      // return `translate3d(0, calc(${calc}), -${reverseIndex}px)`;
      return `translate3d(0, calc(${calc}), 0)`;
    }, [onHover, index, total, reverseIndex, toast.willBeDestroy]);

    console.log({ visible });

    // on mount, set visible to trigger animation
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
        clearTimeout(timer);
      }, 10);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      let unMount = false;
      const shouldBeHide = toast.willBeDestroy;
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

    // const visibleProps = visible ? { opacity: 1, transform: translate } : {};
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
    console.log(toast);

    return (
      <Box
        key={`${toast.id}-${index}`}
        width="420px"
        maxWidth="90vw"
        // maxHeight="75px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border={0}
        borderRadius="5px"
        padding="21px"
        // marginBottom={2}
        bg="#fff"
        position="absolute"
        top={0}
        right={0}
        // opacity={reverseIndex > 4 ? 0 : 1}
        // className={`toast ${visible ? 'visible' : ''} ${hide ? 'hide' : ''}`}
        // boxShadow={reverseIndex > 4 ? 'none' : '0 5px 10px rgba(0, 0, 0, 0.12)'}
        boxShadow="0 5px 10px rgba(0, 0, 0, 0.12)"
        transform="translate3d(0, -100%, 0px) scale(1)"
        transition="transform 400ms ease 0ms, visibility 200ms ease 0ms, opacity 200ms ease 0ms"
        {...visibleProps}
        {...hiddenProps}
      >
        <Box
          // display="-webkit-box"
          // alignItems="center"
          height="100%"
          transition="opacity 0.4 ease"
          wordBreak="break-all"
          // overflow="hidden"
          maxHeight="100%"
          paddingRight={10}
          // textOverflow="ellipsis"
          // {...messageStyles}
          // style={messageStyles}
        >
          {Boolean(toast.title) && (
            <Box mb={2}>
              <Text fontWeight={600}>{toast.title}</Text>
            </Box>
          )}
          <Box>{toast.text}</Box>
        </Box>
        <div className="action">
          {toastActions(toast.actions, toast.cancel)}
        </div>
        <Button
          position="absolute"
          top="16px"
          right="16px"
          border={0}
          padding="0.25rem"
          bg="transparent"
          type="button"
          aria-label="Close Toast"
          onClick={() => toast.cancel(toast.id)}
        >
          <X size="26px" />
        </Button>
        {/* <Button
          position="absolute"
          top="16px"
          right="16px"
          border={0}
          padding="0.25rem"
          bg="transparent"
          type="button"
          aria-label="Close Toast"
          onClick={() => toast.cancel()}
        >
          <X size="26px" />
        </Button> */}
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
