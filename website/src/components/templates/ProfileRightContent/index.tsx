import { FC } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";

import { ClientPuntuactionsType } from "application/types/ClientModelType";
import ProfilePuntuactionCard from "../../organisms/ProfilePuntuactionCard";
import ReactionListEmpty from "components/molecules/ReactionListEmpty";

type ProfileRightContentProps = {
  puntuactions: ClientPuntuactionsType[];
};

const ProfileRightContent: FC<ProfileRightContentProps> = ({
  puntuactions,
}) => {
  return (
    <S.MainContainer>
      <Title color="black" lowercase>
        Mis Reseñas
      </Title>
      {puntuactions.length ? (
        <S.CommentsListContainer>
          {puntuactions.map((v) => (
            <ProfilePuntuactionCard
              key={v.puntuactionId}
              branchOfficeId={v.puntuactionId}
              description={v.description}
            />
          ))}
        </S.CommentsListContainer>
      ) : (
        <S.CommentsEmptyContent>
          <ReactionListEmpty />
        </S.CommentsEmptyContent>
      )}
    </S.MainContainer>
  );
};

export default ProfileRightContent;
