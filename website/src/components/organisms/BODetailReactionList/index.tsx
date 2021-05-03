import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import BOUserPuntuactionCard from "components/molecules/BOUserPuntuactionCard";

import { useAuthContext } from "context/AuthContext/context";

const BODetailReactionList = () => {
  const { user } = useAuthContext();

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <Title color="black" size="medium">
          Valoraciones del lugar
        </Title>
        {user && (
          <Button text="Dejar una valoracion" styles={{ size: "big" }} />
        )}
      </S.TitleContainer>
      <S.PuntuactionList>
        <BOUserPuntuactionCard />
        <BOUserPuntuactionCard />
        <BOUserPuntuactionCard />
        <BOUserPuntuactionCard />
      </S.PuntuactionList>
    </S.MainContainer>
  );
};

export default BODetailReactionList;
