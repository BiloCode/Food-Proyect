import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";

import CreateNewFood from "application/core/CreateNewFood";
import UploadFoodImage from "application/core/UploadFoodImage";

import { FilesCheckingIsImage } from "@food-proyect/shared-functions";

import { useUpdateAtom } from "jotai/utils";
import { addNewFood } from "store/foods";

type ImageUpload = {
  file: File;
  localURL: string;
};

const useFoodCreate = (onModalClose: () => void) => {
  const { addToast } = useToasts();

  const createNewFood = useUpdateAtom(addNewFood);

  const nameRef = useRef<HTMLInputElement>();
  const priceRef = useRef<HTMLInputElement>();

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadImage, setUploadImage] = useState<ImageUpload>(null);

  const onChangeFile = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files;
    const images = FilesCheckingIsImage.check(files);

    if (images.length !== 1) {
      addToast("Ingrese una imagen valida porfavor.", {
        appearance: "warning",
      });
      return;
    }

    setUploadImage(() => ({
      file: files[0],
      localURL: URL.createObjectURL(files[0]),
    }));
  }, []);

  const onSubmitFile = async (ev: FormEvent) => {
    ev.preventDefault();

    const name = nameRef.current?.value.trim();
    const price = parseFloat(priceRef.current?.value.trim());
    const image = uploadImage?.file;

    if (!name || !price || !image) {
      addToast("Existen campos vacios.", { appearance: "warning" });
      return;
    }

    setIsUploading(() => true);

    const uploadFoodImage = new UploadFoodImage();
    const foodService = new CreateNewFood(uploadFoodImage);
    const newFood = await foodService.__invoke({
      image,
      name,
      price,
    });

    if (!newFood) {
      addToast("Ocurrio un error al crear la comida.", { appearance: "error" });
      setIsUploading(() => false);
      return;
    }

    createNewFood(newFood);
    onModalClose();
  };

  return {
    onChangeFile,
    onSubmitFile,
    file: {
      isUploading,
      uploadImage,
    },
    refs: {
      nameRef,
      priceRef,
    },
  };
};

export default useFoodCreate;
