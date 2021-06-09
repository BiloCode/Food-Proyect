import UpdateBranchLocation from "application/core/UpdateBranchLocation";
import { RequestStateType } from "application/types/RequestStateType";
import { useAtom } from "jotai";
import { FormEvent, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { currentBranch as currentBranchStore } from "store/currentBranch";

const useUpdateBranchLocation = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

  const addressRef = useRef<HTMLInputElement>(null);
  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitudeRef = useRef<HTMLInputElement>(null);

  const [requestStateAddress, setRequestStateAddress] =
    useState<RequestStateType>("initialize");

  const onUpdateAddress = async (ev: FormEvent) => {
    ev.preventDefault();
    setRequestStateAddress("loading");

    const address = addressRef.current.value;
    const latitude = parseInt(latitudeRef.current.value);
    const longitude = parseInt(longitudeRef.current.value);

    const updateService = new UpdateBranchLocation();

    const update = await updateService.__invoke({
      id: currentBranch.branch._id,
      address: address,
      latitude: latitude,
      longitude: longitude,
    });

    if (!update) {
      addToast("Error en la actualizacion", { appearance: "error" });
      setRequestStateAddress("error");
    }

    addToast("Localizacion actualizada", { appearance: "success" });

    const newCurrentBrach = { ...currentBranch };

    newCurrentBrach.branch.location = {
      address,
      latitude,
      longitude,
    };

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });

    setRequestStateAddress("complete");
  };

  return {
    addressRef,
    latitudeRef,
    longitudeRef,
    onUpdateAddress,
    requestStateAddress,
    setRequestStateAddress,
  };
};

export default useUpdateBranchLocation;
