import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import Spinner from "components/atoms/Spinner";
import NavigationBar from "components/organisms/NavigationBar";
import ProfileLeftContent from "components/templates/ProfileLeftContent";
import ProfileRightContent from "components/templates/ProfileRightContent";

import DateFormatting from "application/core/DateFormatting";

import useProfileInitialize from "hooks/useProfileInitialize";

const Profile: FC<RouteComponentProps> = () => {
  const {
    requestState,
    currentClientInView,
    isCurrentUserProfile,
  } = useProfileInitialize();

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
              puntuactions={currentClientInView.puntuactions}
              isCurrentUserProfile={isCurrentUserProfile}
            />
          </S.ColumnContainer>
        )
      )}
    </div>
  );
};

export default Profile;
