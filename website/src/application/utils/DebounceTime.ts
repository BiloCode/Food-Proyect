function DebounceTime(callback, wait = 1000) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;

      callback(...args);
    }, wait);
  };
}

export default DebounceTime;
