import { useEffect } from "react";
import { useNavigate, useParams } from "@reach/router";

import GetUserById from "application/core/GetUserById";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";

const useProfileInitialize = () => {
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
    setLoading(true);

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

  const isCurrentUserProfile = currentClientInView?._id === user?._id;

  return {
    isLoading,
    currentClientInView,
    isCurrentUserProfile,
  };
};

export default useProfileInitialize;
