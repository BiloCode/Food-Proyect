import { FC, useState } from "react";

import { Types } from "@food/shared";
import { ProfileContext } from "./context";

export const ProfileProvider: FC = ({ children }) => {
  const [requestState, setRequestState] =
    useState<Types.RequestState>("initialize");
  const [currentClientInView, setCurrentClient] = useState<Types.Client>(null);

  const changeRequestState = (state: Types.RequestState) => {
    setRequestState(() => state);
  };

  const setCurrentProfile = (state: Types.Client) => {
    setCurrentClient(() => state);
  };

  return (
    <ProfileContext.Provider
      value={{
        requestState,
        currentClientInView,
        changeRequestState,
        setCurrentProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
