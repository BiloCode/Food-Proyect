import UpdateBranchPhoneNumber from "application/core/UpdateBranchPhoneNumber";
import { RequestStateType } from "application/types/RequestStateType";
import { currentBranch as currentBranchStore } from "store/currentBranch";

import { useAtom } from "jotai";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

const useUpdateBranchPhoneNumber = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

  const [requestStatePhoneNumber, setRequestStatePhoneNumber] =
    useState<RequestStateType>();

  const onUpdatePhoneNumber = async (id: string, phoneNumber: string) => {
    setRequestStatePhoneNumber("loading");

    const updateService = new UpdateBranchPhoneNumber();

    console.log(id, phoneNumber);

    const update = await updateService.__invoke({
      id: id,
      phoneNumber: phoneNumber,
    });

    if (!update) {
      addToast("Error en la actualizacion", { appearance: "error" });
      setRequestStatePhoneNumber("complete");
    }

    addToast("Numero actualizado", { appearance: "success" });

    const newCurrentBrach = currentBranch;

    newCurrentBrach.branch.phoneNumber = phoneNumber;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });

    setRequestStatePhoneNumber("complete");
  };

  return {
    onUpdatePhoneNumber,
    requestStatePhoneNumber,
  };
};

export default useUpdateBranchPhoneNumber;
