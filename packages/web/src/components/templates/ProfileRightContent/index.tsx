import { FC } from "react";
import * as S from "./styles";

import { Types } from "@food/shared";
import { Title } from "@food/components";

import ProfilePuntuactionCard from "../../organisms/ProfilePuntuactionCard";
import ReactionListEmpty from "components/molecules/ReactionListEmpty";
import Description from "components/atoms/Description";

type TProps = {
  puntuactions: Types.ClientClientPuntuactions[];
  isCurrentUserProfile: boolean;
};

const ProfileRightContent: FC<TProps> = ({
  puntuactions,
  isCurrentUserProfile,
}) => {
  return (
    <S.MainContainer>
      <S.TitleContainer>
        <Title>
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
              stars={v.stars}
              key={v.branchOfficeId}
              createdAt={v.createdAt}
              description={v.description}
              branchOfficeId={v.branchOfficeId}
              branchOfficeName={v.branchOfficeName}
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
