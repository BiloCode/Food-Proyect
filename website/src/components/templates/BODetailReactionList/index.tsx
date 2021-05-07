import { FC, memo } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";
import BOUserPuntuactionCard from "components/molecules/BOUserPuntuactionCard";
import BOUserPuntuactionArea from "components/organisms/BOUserPuntuactionArea";

import { PuntuactionType } from "application/types/BranchOfficeModelType";
import { useAuthContext } from "context/AuthContext/context";

type BODetailReactionProps = {
  puntuactionList: PuntuactionType[];
  userAuthPuntuaction?: PuntuactionType;
};

const BODetailReactionList: FC<BODetailReactionProps> = ({
  puntuactionList,
  userAuthPuntuaction,
}) => {
  const { user } = useAuthContext();

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <Title color="black" size="medium">
          Valoraciones del lugar
        </Title>
        {user && (
          <BOUserPuntuactionArea userAuthPuntuaction={userAuthPuntuaction} />
        )}
      </S.TitleContainer>
      <S.PuntuactionList>
        {puntuactionList.map((v) => (
          <BOUserPuntuactionCard key={v._id} />
        ))}
      </S.PuntuactionList>
    </S.MainContainer>
  );
};

export default memo(BODetailReactionList);
