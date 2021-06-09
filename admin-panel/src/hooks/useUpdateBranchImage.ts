import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import UploadBranchImage from "application/core/UploadBranchImage";
import UpdateBranchImage from "application/core/UpdateBranchImage";
import { RequestStateType } from "application/types/RequestStateType";

import { useAtom } from "jotai";
import { currentBranch as currentBranchStore } from "store/currentBranch";
import DeleteImage from "application/core/DeleteImage";
import { BRANCH_OFFICES_IMAGE_REPOSITORY } from "config/constants";

const useUpdateBranchImage = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);
  const { addToast } = useToasts();

  const [requestState, setRequestState] =
    useState<RequestStateType>("initialize");
  const [loadingPercentaje, setLoadingPercentaje] = useState<number>(0);

  const UpdatePercentaje = (percentaje: number) => {
    setLoadingPercentaje(percentaje);
  };

  const updateImage = async (image: File) => {
    setRequestState("loading");

    const updateImageService = new UploadBranchImage();

    const newImage = await updateImageService.__invoke({
      image,
      UpdatePercentaje,
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
