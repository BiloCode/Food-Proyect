import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import UploadBranchImage from "application/core/UploadBranchImage";
import UpdateBranchImage from "application/core/UpdateBranchImage";
import { RequestStateType } from "application/types/RequestStateType";

import { useAtom } from "jotai";
import { currentBranch as currentBranchStore } from "store/currentBranch";

const useUpdateBranchImage = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

  const [isLoading, setIsLoading] = useState<RequestStateType>("initialize");
  const [loadingPercentaje, setLoadingPercentaje] = useState<number>(0);

  const UpdatePercentaje = (percentaje: number) => {
    setLoadingPercentaje(percentaje);
  };

  const updateImage = async (image: File) => {
    setIsLoading("loading");

    const updateImageService = new UploadBranchImage();

    const newImage = await updateImageService.__invoke({
      image,
      UpdatePercentaje,
    });

    if (!newImage) {
      setIsLoading("error");
      addToast("La imagen no se actualizo correctamente", {
        appearance: "error",
      });
      return;
    }

    const updateBranchService = new UpdateBranchImage();

    const updateCurrentBranch = updateBranchService.__invoke({
      id: currentBranch.branch._id,
      image: newImage,
    });

    if (!updateCurrentBranch) {
      setIsLoading("error");
      addToast("La imagen no se actualizo correctamente", {
        appearance: "error",
      });
      return;
    }

    addToast("Imagen actualizada", { appearance: "success" });

    const newCurrentBrach = currentBranch;

    newCurrentBrach.branch.bannerImage.name = newImage.name;
    newCurrentBrach.branch.bannerImage.url = newImage.url;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });

    setIsLoading("complete");
  };

  return { loadingPercentaje, isLoading, setIsLoading, updateImage };
};

export default useUpdateBranchImage;
