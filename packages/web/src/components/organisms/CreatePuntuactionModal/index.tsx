import { FC } from "react";
import { useParams } from "@reach/router";
import * as S from "./styles";

import { BiCommentDetail } from "react-icons/bi";

import DarkScreen from "components/atoms/DarkScreen";
import FormControlTextarea from "components/molecules/FormControlTextarea";
import StarsInteractive from "components/molecules/StarsInteractive";

import { Title, Button } from "@food/components";

import useCreatePuntuaction from "hooks/useCreatePuntuaction";

type ModalProps = {
  onClose(): void;
  defaultStars?: number;
  defaultDescription?: string;
};

const CreatePuntuactionModal: FC<ModalProps> = ({
  onClose,
  defaultStars,
  defaultDescription,
}) => {
  const { branchOfficeId } = useParams();

  const {
    stars,
    isSendData,
    descriptionRef,
    changeStarValue,
    onSendPuntuaction,
  } = useCreatePuntuaction(branchOfficeId, defaultStars, onClose);

  return (
    <DarkScreen>
      <S.MainContainer>
        <S.ElementsContainer>
          <Title size="big">Deja una valoracion</Title>
          <StarsInteractive clientStars={stars} onClickStar={changeStarValue} />
          <FormControlTextarea
            size="small"
            ref={descriptionRef}
            icon={BiCommentDetail}
            labelText="Descripción (Opcional)"
            defaultValue={defaultDescription}
          />
          <S.ButtonsContainer>
            <Button
              text="Realizar Puntuacion"
              isLoading={isSendData}
              onClick={onSendPuntuaction}
            />
            <Button
              onClick={onClose}
              text="Cancelar y Cerrar"
              styles={{ color: "yellow" }}
            />
          </S.ButtonsContainer>
        </S.ElementsContainer>
      </S.MainContainer>
    </DarkScreen>
  );
};

export default CreatePuntuactionModal;
