import { FC, useEffect } from "react";
import * as S from "./styles";
import { RouteComponentProps, useNavigate, useParams } from "@reach/router";

import Spinner from "components/atoms/Spinner";
import NavigationBar from "components/organisms/NavigationBar";
import ProfileLeftContent from "components/organisms/ProfileLeftContent";
import ProfileRightContent from "components/organisms/ProfileRightContent";

import GetUserById from "application/core/GetUserById";
import DateFormatting from "application/core/DateFormatting";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";

const Profile: FC<RouteComponentProps> = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { userPageId } = useParams();
  const {
    isLoading,
    setLoading,
    setCurrentProfile,
    currentClientInView,
  } = useProfileContext();

  useEffect(() => {
    // setLoading(true);
    if (user?._id === userPageId) {
      setCurrentProfile(user);
      setLoading(false);
      return;
    }

    (async () => {
      const getUserService = new GetUserById();
      const userData = await getUserService.__invoke(userPageId);

      if (!userData) {
        navigate("/", { replace: true });
        return;
      }

      setCurrentProfile(userData);
      setLoading(false);
    })();
  }, [userPageId]);

  return (
    <div>
      <NavigationBar />
      {isLoading ? (
        <S.SpinnerContainer>
          <Spinner size="big" />
        </S.SpinnerContainer>
      ) : (
        <S.ColumnContainer>
          <ProfileLeftContent
            fullName={currentClientInView.fullName}
            description={currentClientInView.description}
            profileImage={currentClientInView.profileImage.url}
            isCurrentUserProfile={currentClientInView._id === user?._id}
            createdAt={DateFormatting.applyFormat(
              currentClientInView.createdAt.toDate()
            )}
          />
          <ProfileRightContent
            puntuactions={currentClientInView.puntuactions}
          />
        </S.ColumnContainer>
      )}
    </div>
  );
};

export default Profile;
