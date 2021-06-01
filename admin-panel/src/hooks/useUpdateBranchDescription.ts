import UpdateBranchDescription from "application/core/UpdateBranchDescription";
import { RequestStateType } from "application/types/RequestStateType";
import { useAtom } from "jotai";
import { useState } from "react";
import { currentBranchStore } from "store/currentBranchStore";

const useUpdateBranchDescription = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);

  const [requestStateDescription, setRequestStateDescription] =
    useState<RequestStateType>();

  const onUpdateDescription = async (id: string, description: string) => {
    setRequestStateDescription("loading");

    const updateService = new UpdateBranchDescription();

    const update = await updateService.__invoke({
      id: id,
      description: description,
    });

    if (!update) {
      setRequestStateDescription("complete");
    }

    const newCurrentBrach = currentBranch;

    newCurrentBrach.branch.description = description;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });

    setRequestStateDescription("complete");
  };

  return {
    onUpdateDescription,
    requestStateDescription,
  };
};

export default useUpdateBranchDescription;
