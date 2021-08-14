import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import { Spinner } from "@food/components";
import NavigationBar from "components/organisms/NavigationBar";
import ProfileLeftContent from "components/templates/ProfileLeftContent";
import ProfileRightContent from "components/templates/ProfileRightContent";

import { Utils } from "@food/shared";

import useProfileInitialize from "hooks/useProfileInitialize";

const Profile: FC<RouteComponentProps> = () => {
  const { requestState, currentClientInView, isCurrentUserProfile } =
    useProfileInitialize();

  return (
    <div>
      <NavigationBar />
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
              createdAt={Utils.dateFormating(
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
