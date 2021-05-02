import { useNavigate } from "@reach/router";
import * as S from "./styles";

import EmptyImage from "assets/images/icon-empty.svg";

import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import Button from "components/atoms/Button";
import { memo } from "react";

type ReactionListEmpty = {
  isCurrentUserProfile: boolean;
};

const ReactionListEmpty = ({ isCurrentUserProfile }: ReactionListEmpty) => {
  const navigate = useNavigate();

  const onClickButton = () => navigate("/map");

  return (
    <S.EmptyDesign>
      <img src={EmptyImage} alt="svg-icon-empty" />
      <S.TextContainer>
        <Title lowercase color="black" letterSpacing size="medium">
          Sin reseñas
        </Title>
        <Description size="small">
          {isCurrentUserProfile
            ? "Deja alguna reseña en nuestras distintas sucursales de la aplicacion"
            : "Este usuario aun no ha realizado reseñas de nuestras sucursales."}
        </Description>
      </S.TextContainer>
      {isCurrentUserProfile && (
        <Button
          onClick={onClickButton}
          text="Buscar Sucursales"
          styles={{ color: "yellow" }}
        />
      )}
    </S.EmptyDesign>
  );
};

export default memo(ReactionListEmpty);
