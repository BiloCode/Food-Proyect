import { useCallback, useState } from "react";

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const setState = (active: boolean) => setActive(() => active);

  const toggleActive = useCallback(
    () => setActive((active) => !active),
    [active]
  );

  return {
    active,
    toggleActive,
    setState,
  };
};

export default useActive;
