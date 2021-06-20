import { FC } from "react";
import { useParams } from "@reach/router";
import * as S from "./styles";

import useDeletePuntuaction from "hooks/useDeletePuntuaction";

import Button from "components/atoms/Button";
import BOUserAuthPuntuaction from "components/molecules/BOUserAuthPuntuaction";

import { PuntuactionType } from "@food-proyect/shared-types";

type ButtonsProps = {
  onActiveMenu(): void;
  puntuactionData: PuntuactionType;
};

const ButtonsPuntuactionArea: FC<ButtonsProps> = ({
  onActiveMenu,
  puntuactionData,
}) => {
  const { branchOfficeId } = useParams();
  const { isSendData, onDeletePuntuaction } = useDeletePuntuaction(
    puntuactionData.userId,
    branchOfficeId
  );

  const onClickActiveMenu = () => {
    if (isSendData) return;

    onActiveMenu();
  };

  return (
    <S.MainContainer>
      <BOUserAuthPuntuaction
        description={puntuactionData.description}
        stars={puntuactionData.stars}
      />
      <S.ButtonContainer>
        <Button text="Cambiar Valoracion" onClick={onClickActiveMenu} />
        <Button
          text="Borrar Valoracion"
          isLoading={isSendData}
          styles={{ color: "yellow" }}
          onClick={onDeletePuntuaction}
        />
      </S.ButtonContainer>
    </S.MainContainer>
  );
};

export default ButtonsPuntuactionArea;
