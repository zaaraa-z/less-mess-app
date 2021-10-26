import { useRef, useEffect } from 'react';

export const useDefaultInputFocus = () => {
  const defaultFocusedInputRef = useRef();

  useEffect(() => {
    if (defaultFocusedInputRef.current) {
      defaultFocusedInputRef.current.focus();
    }
  }, []);

  return defaultFocusedInputRef;
};
