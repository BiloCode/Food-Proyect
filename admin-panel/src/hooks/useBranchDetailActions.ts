import { useEffect } from "react";

import useScroll from "hooks/useScroll";
import useActive from "./useActive";

const useBranchDetailActions = () => {
  const { disabled, enabled } = useScroll();
  const { active, toggleActive } = useActive();

  useEffect(() => {
    active && disabled();
    !active && enabled();
  }, [active]);

  const CreateFood = () => toggleActive();
  const RemoveFood = () => {};
  const DisabledBranch = () => {};

  return {
    menuModalActive: active,
    menuModalToggle: toggleActive,
    CreateFood,
    RemoveFood,
    DisabledBranch,
  };
};

export default useBranchDetailActions;
