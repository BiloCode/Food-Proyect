function DebounceTime(callback, wait = 1000) {
  let timeout;

  return function (...args) {
    const later = () => {
      timeout = null;

      callback(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// function xxx(...args) {
//   args.forEach((v) => {
//     console.log(v);
//   });
// }

// xxx(1);

export default DebounceTime;
