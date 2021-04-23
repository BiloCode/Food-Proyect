import { FC, useState } from "react";

import { ProfileContext } from "./context";
import { ClientModelType } from "application/types/ClientModelType";

export const ProfileProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentClientInView, setCurrentClient] = useState<ClientModelType>(
    null
  );

  const setLoading = (state: boolean) => setIsLoading(() => state);
  const setCurrentProfile = (state: ClientModelType) =>
    setCurrentClient(() => state);

  return (
    <ProfileContext.Provider
      value={{
        isLoading,
        currentClientInView,
        setLoading,
        setCurrentProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
