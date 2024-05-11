import { useState, useEffect, useRef } from "react";

const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
