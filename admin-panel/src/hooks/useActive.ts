import { useState } from "react";

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => setActive((active) => !active);

  return {
    active,
    toggleActive,
  };
};

export default useActive;
