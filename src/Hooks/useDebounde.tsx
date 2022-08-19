import { useEffect, useState } from "react";

function useDebounce<T extends string, P extends number>(value: T, delay: P) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  });
  return debouncedValue;
}

export default useDebounce;
