import UploadBranchImage from "application/core/UploadBranchImage";
import UpdateBranchImage from "application/core/UpdateBranchImage";
import { currentBranchStore } from "store/currentBranchStore";

import { useAtom } from "jotai";
import { useState } from "react";
import { RequestStateType } from "application/types/RequestStateType";

const useUpdateBranchImage = () => {
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchStore);

  const [isLoading, setIsLoading] = useState<RequestStateType>("initialize");
  const [loadingPercentaje, setLoadingPercentaje] = useState<number>(0);

  const UpdatePercentaje = (percentaje: number) => {
    setLoadingPercentaje(percentaje);
  };

  console.log(loadingPercentaje);

  const updateImage = async (image: File) => {
    setIsLoading("loading");

    const updateImageService = new UploadBranchImage();

    const newImage = await updateImageService.__invoke({
      image,
      UpdatePercentaje,
    });

    if (!newImage) {
      setIsLoading("error");
      alert("No se cargo correctamente la imagen");
      return;
    }

    const updateBranchService = new UpdateBranchImage();

    const updateCurrentBranch = updateBranchService.__invoke({
      id: currentBranch.branch._id,
      image: newImage,
    });

    if (!updateCurrentBranch) {
      setIsLoading("error");
      alert("Algo salio mal");
      return;
    }

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
