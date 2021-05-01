import { FC } from "react";
import faker from "faker";
import * as S from "./styles";

import Title from "components/atoms/Title";

import { ClientPuntuactionsType } from "application/types/ClientModelType";
import ProfilePuntuactionCard from "../ProfilePuntuactionCard";

type ProfileRightContentProps = {
  puntuactions: ClientPuntuactionsType[];
};

const ProfileRightContent: FC<ProfileRightContentProps> = ({
  puntuactions,
}) => {
  return (
    <div>
      <Title color="black" lowercase>
        Mis Reseñas
      </Title>
      <S.CommentsListContainer>
        {puntuactions.map((v) => (
          <ProfilePuntuactionCard
            key={v.puntuactionId}
            branchOfficeId={v.puntuactionId}
            description={v.description}
          />
        ))}
      </S.CommentsListContainer>
    </div>
  );
};

export default ProfileRightContent;
