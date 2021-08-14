import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import { RequestState } from "@food/shared-types";
import DeleteImage from "application/core/DeleteImage";
import UploadBranchImage from "application/core/BranchOffice/UploadBranchImage";
import UpdateBranchImage from "application/core/BranchOffice/UpdateBranchImage";

import { useAtom } from "jotai";
import { currentBranch as currentBranchStore } from "store/currentBranch";
import { BRANCH_OFFICES_IMAGE_REPOSITORY } from "config/constants";

const useUpdateBranchImage = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

  const [requestState, setRequestState] = useState<RequestState>("initialize");
  const [loadingPercentaje, setLoadingPercentaje] = useState<number>(0);

  const updatePercentaje = (percentaje: number) => {
    setLoadingPercentaje(percentaje);
  };

  const updateImage = async (image: File) => {
    setRequestState("loading");

    const updateImageService = new UploadBranchImage();

    const newImage = await updateImageService.__invoke({
      image,
      updatePercentaje,
    });

    if (!newImage) {
      setRequestState("error");
      addToast("La imagen no se actualizo correctamente", {
        appearance: "error",
      });
      return;
    }

    const updateBranchService = new UpdateBranchImage();

    const updateCurrentBranch = await updateBranchService.__invoke({
      id: currentBranch.branch._id,
      image: newImage,
    });

    if (!updateCurrentBranch) {
      setRequestState("error");
      addToast("La imagen no se actualizo correctamente", {
        appearance: "error",
      });
      return;
    }

    const deleteCurrentImageService = new DeleteImage();

    const deleteCurrentImage = await deleteCurrentImageService.exec(
      BRANCH_OFFICES_IMAGE_REPOSITORY +
        "/" +
        currentBranch.branch.bannerImage.name
    );

    if (!deleteCurrentImage) {
      setRequestState("error");
      addToast("La imagen no se actualizo correctamente", {
        appearance: "error",
      });
      return;
    }

    addToast("Imagen actualizada", { appearance: "success" });

    const newCurrentBrach = { ...currentBranch };

    newCurrentBrach.branch.bannerImage.name = newImage.name;
    newCurrentBrach.branch.bannerImage.url = newImage.url;

    setCurrentBranch({
      branch: newCurrentBrach.branch,
    });

    setRequestState("complete");
  };

  return { loadingPercentaje, requestState, setRequestState, updateImage };
};

export default useUpdateBranchImage;
