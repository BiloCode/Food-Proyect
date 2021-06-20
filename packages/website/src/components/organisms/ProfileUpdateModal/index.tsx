import { FC } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import * as S from "./styles";

import Button from "components/atoms/Button";
import DarkScreen from "components/atoms/DarkScreen";
import FormControl from "components/molecules/FormControl";
import FormControlTextarea from "components/molecules/FormControlTextarea";

import useProfileUpdateInformation from "hooks/useProfileUpdateInformation";
import {
  clientDescriptionMaxLength,
  clientFullNameMaxLength,
} from "config/constans";
import Spinner from "components/atoms/Spinner";

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
  const {
    onSubmit,
    isSendData,
    fullnameRef,
    descriptionRef,
  } = useProfileUpdateInformation(onClose);

  return (
    <DarkScreen>
      <S.ContainerModal>
        <S.FormContainer onSubmit={onSubmit}>
          <S.InputContainer>
            <FormControl
              ref={fullnameRef}
              icon={BsFillPersonFill}
              defaultValue={fullName}
              labelText="Nombre de usuario"
              maxLength={clientFullNameMaxLength}
            />
            <FormControlTextarea
              ref={descriptionRef}
              icon={MdDescription}
              labelText="Descripción"
              defaultValue={description}
              maxLength={clientDescriptionMaxLength}
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
              styles={{ size: "big", color: "yellow" }}
            />
          </S.ButtonContainer>
          {isSendData && (
            <S.SpinnerContainer>
              <Spinner color="blue" size="big" />
            </S.SpinnerContainer>
          )}
        </S.FormContainer>
      </S.ContainerModal>
    </DarkScreen>
  );
};

export default ProfileUpdateModal;
