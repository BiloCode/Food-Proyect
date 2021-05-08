import { createContext, useContext } from "react";

import { ClientModelType } from "application/types/ClientModelType";
import { RequestStateType } from "application/types/RequestStateType";

interface ProfileContextType {
  requestState: RequestStateType;
  currentClientInView?: ClientModelType;
  setCurrentProfile(state: ClientModelType);
  changeRequestState(state: RequestStateType);
}

export const ProfileContext = createContext<ProfileContextType>({
  requestState: "not",
  currentClientInView: null,
  setCurrentProfile() {},
  changeRequestState() {},
});

export const useProfileContext = () => useContext(ProfileContext);
