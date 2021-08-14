import { createContext, useContext } from "react";

import { Types } from "@food/shared";

interface ProfileContextType {
  requestState: Types.RequestState;
  currentClientInView?: Types.Client;
  setCurrentProfile(state: Types.Client);
  changeRequestState(state: Types.RequestState);
}

export const ProfileContext = createContext<ProfileContextType>({
  requestState: "initialize",
  currentClientInView: null,
  setCurrentProfile() {},
  changeRequestState() {},
});

export const useProfileContext = () => useContext(ProfileContext);
