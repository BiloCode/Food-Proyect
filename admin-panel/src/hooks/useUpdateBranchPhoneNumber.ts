import UpdateBranchPhoneNumber from "application/core/UpdateBranchPhoneNumber";
import { RequestStateType } from "application/types/RequestStateType";
import { currentBranchStore } from "store/currentBranchStore";

import { useAtom } from "jotai";
import { useState } from "react";

const useUpdateBranchPhoneNumber = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);

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
      setRequestStatePhoneNumber("complete");
    }

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
