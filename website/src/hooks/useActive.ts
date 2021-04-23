import { useState } from "react";

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => setActive((act) => !act);

  return {
    active,
    toggleActive,
  };
};

export default useActive;
