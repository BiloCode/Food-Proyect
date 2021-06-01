import UpdateBranchAddress from "application/core/UpdateBranchAddress";
import { RequestStateType } from "application/types/RequestStateType";
import { useAtom } from "jotai";
import { useState } from "react";
import { currentBranchStore } from "store/currentBranchStore";

const useUpdateBranchAddress = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);

  const [requestStateAddress, setRequestStateAddress] =
    useState<RequestStateType>();

  const onUpdateAddress = async (id: string, address: string) => {
    setRequestStateAddress("loading");

    const updateService = new UpdateBranchAddress();

    console.log(id, address);

    const update = await updateService.__invoke({
      id: id,
      address: address,
    });

    if (!update) {
      setRequestStateAddress("complete");
    }

    const newCurrentBrach = currentBranch;

    newCurrentBrach.branch.location.address = address;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });

    setRequestStateAddress("complete");
  };

  return {
    onUpdateAddress,
    requestStateAddress,
  };
};

export default useUpdateBranchAddress;
