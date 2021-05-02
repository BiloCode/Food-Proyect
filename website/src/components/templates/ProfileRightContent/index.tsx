import { FC } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";

import { ClientPuntuactionsType } from "application/types/ClientModelType";
import ProfilePuntuactionCard from "../../organisms/ProfilePuntuactionCard";
import ReactionListEmpty from "components/molecules/ReactionListEmpty";
import Description from "components/atoms/Description";

type ProfileRightContentProps = {
  puntuactions: ClientPuntuactionsType[];
  isCurrentUserProfile: boolean;
};

const ProfileRightContent: FC<ProfileRightContentProps> = ({
  puntuactions,
  isCurrentUserProfile,
}) => {
  return (
    <S.MainContainer>
      <S.TitleContainer>
        <Title color="black" lowercase>
          {isCurrentUserProfile ? "Mis Reseñas" : "Reseñas Realizadas"}
        </Title>
        <Description size="medium">
          {isCurrentUserProfile
            ? "Visualiza todas tus reseñas de nuestras sucursales."
            : "Visualiza todas las reseñas hechas por este usuario."}
        </Description>
      </S.TitleContainer>
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
          <ReactionListEmpty isCurrentUserProfile={isCurrentUserProfile} />
        </S.CommentsEmptyContent>
      )}
    </S.MainContainer>
  );
};

export default ProfileRightContent;
