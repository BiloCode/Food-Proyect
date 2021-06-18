import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";

import CreateNewFood from "application/core/CreateNewFood";
import UploadFoodImage from "application/core/UploadFoodImage";
import FilesCheckingIsImage from "application/utils/FileCheckingIsImage";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { addNewFood } from "store/foods";
import { FoodType } from "application/types/FoodType";
import UploadBranchImage from "application/core/UploadBranchImage";
import CreateNewBranchOffice from "application/core/CreateNewBranchOffice";
import { useAtom } from "jotai";
import { branchOffice } from "store/branchOffice";

type ImageUpload = {
  file: File;
  localURL: string;
};

const useCreateBranchOffice = (onModalClose: () => void) => {
  const { addToast } = useToasts();

  const [currentBranchOffices, setCurrentBranchOffices] = useAtom(branchOffice);

  const [loadingPercentaje, setLoadingPercentaje] = useState<number>(0);

  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();
  const locationNameRef = useRef<HTMLInputElement>();
  const latitudeRef = useRef<HTMLInputElement>();
  const longitudeRef = useRef<HTMLInputElement>();

  const UpdatePercentaje = (percentaje: number) => {
    setLoadingPercentaje(percentaje);
  };

  const [typeFood, setTypeFood] = useState<FoodType>(null);

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

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setIsUploading(() => true);

    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const locationName = locationNameRef.current.value;
    const latitude = parseFloat(latitudeRef.current.value);
    const longitude = parseFloat(longitudeRef.current.value);
    const image = uploadImage?.file;

    if (
      name === "" ||
      description === "" ||
      email === "" ||
      phone === "" ||
      locationName === "" ||
      latitude === 0 ||
      longitude === 0 ||
      !typeFood
    ) {
      addToast("Ingrese los datos completos", {
        appearance: "info",
      });
      setIsUploading(() => false);
      return;
    }

    const uploadBranchImage = new UploadBranchImage();

    const branchService = new CreateNewBranchOffice(uploadBranchImage);

    const newBranch = await branchService.__invoke({
      image,
      UpdatePercentaje,
      params: {
        name: name,
        foodType: typeFood,
        description: description,
        phoneNumber: phone,
        location: {
          address: locationName,
          latitude: latitude,
          longitude: longitude,
        },
      },
    });

    if (!newBranch) {
      addToast("Ocurrio un error al crear la sucursal.", {
        appearance: "error",
      });
      setIsUploading(() => false);
      return;
    }
    addToast("Sucursal creada correctamente", {
      appearance: "success",
    });

    const newBranchOffices = { ...currentBranchOffices };

    newBranchOffices.data.push(newBranch);

    setCurrentBranchOffices(newBranchOffices);

    setIsUploading(() => false);
    onModalClose();
  };

  return {
    onChangeFile,
    onSubmit,
    setTypeFood,
    file: {
      loadingPercentaje,
      isUploading,
      uploadImage,
    },
    refs: {
      nameRef,
      descriptionRef,
      emailRef,
      phoneRef,
      locationNameRef,
      latitudeRef,
      longitudeRef,
    },
  };
};

export default useCreateBranchOffice;
