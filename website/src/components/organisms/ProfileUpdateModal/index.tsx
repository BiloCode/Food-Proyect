import { FC } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import * as S from "./styles";

import DarkScreen from "components/atoms/DarkScreen";
import FormControl from "components/molecules/FormControl";
import Button from "components/atoms/Button";

type ProfileUpdateModalProps = {
  fullName: string;
  description: string;
  onClose?(): void;
};

const ProfileUpdateModal: FC<ProfileUpdateModalProps> = ({
  onClose,
  fullName,
  description,
}) => {
  return (
    <DarkScreen>
      <S.ContainerModal>
        <S.FormContainer>
          <S.InputContainer>
            <FormControl
              icon={BsFillPersonFill}
              defaultValue={fullName}
              labelText="Nombre de usuario"
            />
            <FormControl
              icon={BiComment}
              defaultValue={description}
              labelText="Descripción"
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button
              type="submit"
              text="Actualizar Informacion"
              styles={{ size: "big" }}
            />
            <Button
              onClick={onClose}
              text="Cerrar Modal"
              styles={{ size: "big", color: "red" }}
            />
          </S.ButtonContainer>
        </S.FormContainer>
      </S.ContainerModal>
    </DarkScreen>
  );
};

export default ProfileUpdateModal;
