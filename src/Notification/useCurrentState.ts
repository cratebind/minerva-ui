import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

// export type CurrentStateType<S> = [
//   S,
//   Dispatch<SetStateAction<S>>,
//   MutableRefObject<S>
// ];

const useCurrentState = initialState => {
  const [state, setState] = useState(() => {
    return typeof initialState === 'function' ? initialState() : initialState;
  });
  const ref = useRef(initialState);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  const setValue = val => {
    const result = typeof val === 'function' ? val(ref.current) : val;
    ref.current = result;
    setState(result);
  };

  return [state, setValue, ref];
};

export default useCurrentState;
