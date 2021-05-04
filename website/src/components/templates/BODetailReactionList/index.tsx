import * as S from "./styles";

import Title from "components/atoms/Title";
import BOUserPuntuactionCard from "components/molecules/BOUserPuntuactionCard";
import BOUserPuntuactionArea from "components/organisms/BOUserPuntuactionArea";

import { useAuthContext } from "context/AuthContext/context";

const BODetailReactionList = () => {
  const { user } = useAuthContext();

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <Title color="black" size="medium">
          Valoraciones del lugar
        </Title>
        {user && <BOUserPuntuactionArea />}
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
