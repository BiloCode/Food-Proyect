import { FC, useEffect } from "react";
import * as S from "./styles";
import { RouteComponentProps, useNavigate, useParams } from "@reach/router";

import NavigationBar from "components/organisms/NavigationBar";
import ProfileLeftContent from "components/organisms/ProfileLeftContent";
import ProfileRightContent from "components/organisms/ProfileRightContent";
import { useProfileContext } from "context/ProfileContext/context";
import Spinner from "components/atoms/Spinner";
import { useAuthContext } from "context/AuthContext/context";
import GetUserById from "application/core/GetUserById";

const Profile: FC<RouteComponentProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const {
    isLoading,
    currentClientInView,
    setLoading,
    setCurrentProfile,
  } = useProfileContext();

  useEffect(() => {
    if (user?._id !== id) {
      const userFetchingData = async () => {
        const getUserService = new GetUserById();
        const userData = await getUserService.__invoke(id);

        if (!userData) {
          navigate("/", { replace: true });
          return;
        }

        setCurrentProfile(userData);
        setLoading(false);
      };

      userFetchingData();

      return;
    }

    setCurrentProfile(user);
    setLoading(false);
  }, [id]);

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
            isCurrentUserProfile={currentClientInView._id === user?._id}
            fullName={currentClientInView.fullName}
            profileImage={currentClientInView.profileImage.url}
          />
          <ProfileRightContent />
        </S.ColumnContainer>
      )}
    </div>
  );
};

export default Profile;
