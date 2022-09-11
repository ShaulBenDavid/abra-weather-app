function useDebounce<T extends any[], P extends number>(cb: (...args: T) => void, delay: P) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default useDebounce; 
