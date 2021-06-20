import { FC, useState } from "react";

import { ProfileContext } from "./context";
import { ClientModelType, RequestStateType } from "@food-proyect/shared-types";

export const ProfileProvider: FC = ({ children }) => {
  const [requestState, setRequestState] =
    useState<RequestStateType>("initialize");
  const [currentClientInView, setCurrentClient] =
    useState<ClientModelType>(null);

  const changeRequestState = (state: RequestStateType) => {
    setRequestState(() => state);
  };

  const setCurrentProfile = (state: ClientModelType) => {
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
