import { useEffect } from "react";

import useScroll from "hooks/useScroll";
import useActive from "./useActive";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { menuDeleteMode } from "store/menuDeleteMode";

const useBranchDetailActions = () => {
  const { disabled, enabled } = useScroll();
  const { active, toggleActive } = useActive();

  const deleteMode = useAtomValue(menuDeleteMode);
  const setDeleteMode = useUpdateAtom(menuDeleteMode);

  useEffect(() => {
    active && disabled();
    !active && enabled();
  }, [active]);

  const CreateFood = () => toggleActive();
  const RemoveFood = () => setDeleteMode((mode) => ({ ...mode, state: true }));
  const DisabledBranch = () => {};

  return {
    CreateFood,
    RemoveFood,
    DisabledBranch,
    menuModalActive: active,
    menuModalToggle: toggleActive,
    menuDeleteModal: deleteMode.state,
  };
};

export default useBranchDetailActions;
