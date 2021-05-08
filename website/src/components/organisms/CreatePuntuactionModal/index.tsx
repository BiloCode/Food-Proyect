import { FC, useState } from "react";
import * as S from "./styles";

import { BiCommentDetail } from "react-icons/bi";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import FormControlTextarea from "components/molecules/FormControlTextarea";
import StarPuntuactionInteractive from "components/molecules/StarPuntuactionInteractive";
import { StarsType } from "application/types/StarsType";

type ModalProps = {
  onClose(): void;
};

const CreatePuntuactionModal: FC<ModalProps> = ({ onClose }) => {
  const [stars, setStars] = useState<StarsType>(0);

  const changeStars = (starNumber) => () => setStars(() => starNumber);

  return (
    <Portals>
      <DarkScreen>
        <S.MainContainer>
          <S.ElementsContainer>
            <Title color="black" size="small-medium">
              Deja una valoracion
            </Title>
            <StarPuntuactionInteractive
              starsSelected={stars}
              onClickStar={changeStars}
            />
            <FormControlTextarea
              icon={BiCommentDetail}
              labelText="Descripción (Opcional)"
              size="small"
            />
            <S.ButtonsContainer>
              <Button text="Realizar Puntuacion" />
              <Button
                onClick={onClose}
                text="Cancelar y Cerrar"
                styles={{ color: "yellow" }}
              />
            </S.ButtonsContainer>
          </S.ElementsContainer>
        </S.MainContainer>
      </DarkScreen>
    </Portals>
  );
};

export default CreatePuntuactionModal;
