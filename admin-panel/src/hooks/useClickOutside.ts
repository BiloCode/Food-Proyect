import { RefObject, useEffect } from "react";

const useClickOutside = (
  ref: RefObject<any>,
  handler: (ev: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const onClickHandler = (ev: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(ev.target)) {
        return;
      }

      handler(ev);
    };

    document.addEventListener("mousedown", onClickHandler);
    document.addEventListener("touchstart", onClickHandler);

    return () => {
      document.removeEventListener("mousedown", onClickHandler);
      document.removeEventListener("touchstart", onClickHandler);
    };
  }, [ref, handler]);
};

export default useClickOutside;
