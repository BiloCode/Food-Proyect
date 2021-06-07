import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import * as S from "./styles";

import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import FormControl from "components/molecules/FormControl";
import FoodCreateImage from "components/molecules/FoodCreateImage";

import { FaHamburger } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

import CreateNewFood from "application/core/CreateNewFood";
import UploadFoodImage from "application/core/UploadFoodImage";

import { useUpdateAtom } from "jotai/utils";
import { addNewFood } from "store/foodStore";

type ModalProps = {
  onClose(): void;
};

type ImageUpload = {
  file: File;
  localURL: string;
};

const FoodModalCreate = ({ onClose }: ModalProps) => {
  const { addToast } = useToasts();
  const createNewFood = useUpdateAtom(addNewFood);

  const nameRef = useRef<HTMLInputElement>();
  const priceRef = useRef<HTMLInputElement>();

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadImage, setUploadImage] = useState<ImageUpload>(null);

  const onChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files;

    if (!files.length) return;

    setUploadImage(() => ({
      file: files[0],
      localURL: URL.createObjectURL(files[0]),
    }));
  }, []);

  const onSubmit = async (ev: FormEvent) => {
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
    onClose();
  };

  return (
    <Portals>
      <DarkScreen>
        <S.MainContainer>
          <S.FormContainer onSubmit={onSubmit}>
            <FoodCreateImage
              onChange={onChange}
              foodImage={uploadImage?.localURL}
            />
            <S.FormControlContainer>
              <S.FormControls>
                <FormControl
                  ref={nameRef}
                  icon={FaHamburger}
                  labelText="Nombre"
                />
                <FormControl
                  type="number"
                  ref={priceRef}
                  icon={HiOutlineCurrencyDollar}
                  labelText="Precio"
                />
              </S.FormControls>
              <S.GridButtons>
                <Button
                  type="submit"
                  text="Crear nueva comida"
                  isLoading={isUploading}
                  styles={{ color: "blue" }}
                />
                <Button
                  onClick={onClose}
                  text="Cancelar y Cerrar"
                  styles={{ color: "yellow" }}
                />
              </S.GridButtons>
            </S.FormControlContainer>
          </S.FormContainer>
        </S.MainContainer>
      </DarkScreen>
    </Portals>
  );
};

export default FoodModalCreate;
