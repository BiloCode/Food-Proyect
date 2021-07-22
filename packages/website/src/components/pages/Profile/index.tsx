import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import { Spinner } from "@food-proyect/shared-components";
import NavigationBar from "components/organisms/NavigationBar";
import ProfileLeftContent from "components/templates/ProfileLeftContent";
import ProfileRightContent from "components/templates/ProfileRightContent";

import { DateFormatting } from "@food-proyect/shared-functions";

import useProfileInitialize from "hooks/useProfileInitialize";

const Profile: FC<RouteComponentProps> = () => {
  const { requestState, currentClientInView, isCurrentUserProfile } =
    useProfileInitialize();

  return (
    <div>
      <NavigationBar staticPosition />
      {requestState === "loading" ? (
        <S.SpinnerContainer>
          <Spinner size="big" />
        </S.SpinnerContainer>
      ) : (
        requestState === "complete" && (
          <S.ColumnContainer>
            <ProfileLeftContent
              fullName={currentClientInView.fullName}
              description={currentClientInView.description}
              profileImage={currentClientInView.profileImage.url}
              isCurrentUserProfile={isCurrentUserProfile}
              createdAt={DateFormatting.applyFormat(
                currentClientInView.createdAt.toDate()
              )}
            />
            <ProfileRightContent
              puntuactions={currentClientInView.puntuaction.store}
              isCurrentUserProfile={isCurrentUserProfile}
            />
          </S.ColumnContainer>
        )
      )}
    </div>
  );
};

export default Profile;
