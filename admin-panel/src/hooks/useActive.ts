import { useCallback, useState } from "react";

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = useCallback(
    () => setActive((active) => !active),
    [active]
  );

  return {
    active,
    toggleActive,
  };
};

export default useActive;
