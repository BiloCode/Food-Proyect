import { createContext, useContext } from "react";

import { ClientModelType } from "application/types/ClientModelType";

interface ProfileContextType {
  isLoading: boolean;
  currentClientInView?: ClientModelType;
  setLoading(state: boolean);
  setCurrentProfile(state: ClientModelType);
}

export const ProfileContext = createContext<ProfileContextType>({
  isLoading: true,
  currentClientInView: null,
  setLoading() {},
  setCurrentProfile() {},
});

export const useProfileContext = () => useContext(ProfileContext);
