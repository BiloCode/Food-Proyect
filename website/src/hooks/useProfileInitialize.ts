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
    requestState,
    changeRequestState,
    setCurrentProfile,
    currentClientInView,
  } = useProfileContext();

  useEffect(() => {
    if (user?._id === userPageId) {
      setCurrentProfile(user);
      changeRequestState("complete");
      return;
    }

    changeRequestState("loading");

    (async () => {
      const getUserService = new GetUserById();
      const userData = await getUserService.__invoke(userPageId);

      if (!userData) {
        changeRequestState("not");
        navigate("/", { replace: true });
        return;
      }

      setCurrentProfile(userData);
      changeRequestState("complete");
    })();

    return () => {
      setCurrentProfile(null);
      changeRequestState("not");
    };
  }, [userPageId]);

  const isCurrentUserProfile = currentClientInView?._id === user?._id;

  return {
    requestState,
    currentClientInView,
    isCurrentUserProfile,
  };
};

export default useProfileInitialize;
