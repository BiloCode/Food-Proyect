import { createContext, useContext } from "react";

import { ClientModelType, RequestStateType } from "@food-proyect/shared-types";

interface ProfileContextType {
  requestState: RequestStateType;
  currentClientInView?: ClientModelType;
  setCurrentProfile(state: ClientModelType);
  changeRequestState(state: RequestStateType);
}

export const ProfileContext = createContext<ProfileContextType>({
  requestState: "initialize",
  currentClientInView: null,
  setCurrentProfile() {},
  changeRequestState() {},
});

export const useProfileContext = () => useContext(ProfileContext);
