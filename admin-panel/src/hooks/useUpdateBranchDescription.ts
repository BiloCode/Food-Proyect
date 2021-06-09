import { RequestStateType } from "application/types/RequestStateType";
import { useAtom } from "jotai";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { currentBranch as currentBranchStore } from "store/currentBranch";

import UpdateBranchDescription from "application/core/UpdateBranchDescription";

const useUpdateBranchDescription = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

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
      addToast("Error en actualizacion ", { appearance: "error" });
    }

    addToast("Descripción actualizada", { appearance: "success" });

    const newCurrentBrach = { ...currentBranch };

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
