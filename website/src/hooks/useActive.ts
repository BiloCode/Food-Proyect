import { useCallback, useState } from "react";

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = useCallback(() => setActive((act) => !act), []);

  return {
    active,
    toggleActive,
  };
};

export default useActive;
