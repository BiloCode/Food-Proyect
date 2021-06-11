import * as S from "./styles";

import { FaHamburger } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import FormControl from "components/molecules/FormControl";
import FoodCreateImage from "components/molecules/FoodCreateImage";

import useFoodCreate from "hooks/useFoodCreate";

type ModalProps = {
  onClose(): void;
};

const FoodModalCreate = ({ onClose }: ModalProps) => {
  const { onChangeFile, onSubmitFile, file, refs } = useFoodCreate(onClose);

  return (
    <Portals>
      <DarkScreen>
        <S.MainContainer>
          <S.FormContainer onSubmit={onSubmitFile}>
            <FoodCreateImage
              onChange={onChangeFile}
              changeEnabled={!file.isUploading}
              foodImage={file.uploadImage?.localURL}
            />
            <S.FormControlContainer>
              <S.FormControls>
                <FormControl
                  ref={refs.nameRef}
                  icon={FaHamburger}
                  labelText="Nombre"
                />
                <FormControl
                  type="number"
                  ref={refs.priceRef}
                  icon={HiOutlineCurrencyDollar}
                  labelText="Precio"
                />
              </S.FormControls>
              <S.GridButtons>
                <Button
                  type="submit"
                  text="Crear nueva comida"
                  isLoading={file.isUploading}
                  styles={{ color: "blue" }}
                />
                <Button
                  onClick={onClose}
                  text="Cancelar y Cerrar"
                  styles={{ color: "yellow" }}
                  disabled={file.isUploading}
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
