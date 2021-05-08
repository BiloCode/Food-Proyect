import { FC, useState } from "react";

import { ProfileContext } from "./context";
import { ClientModelType } from "application/types/ClientModelType";
import { RequestStateType } from "application/types/RequestStateType";

export const ProfileProvider: FC = ({ children }) => {
  const [requestState, setRequestState] = useState<RequestStateType>("not");
  const [currentClientInView, setCurrentClient] = useState<ClientModelType>(
    null
  );

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
