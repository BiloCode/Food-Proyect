import { FC, useEffect, useState } from "react";
import firebase from "firebase";

import GetUserById from "application/core/GetUserById";
import { ClientModelType } from "@food-proyect/shared-types";
import { AuthContext } from "./context";

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<ClientModelType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const changeUserAuthData = (user: ClientModelType) => setUser(() => user);

  useEffect(() => {
    const authStateChanged = async (user) => {
      if (user) {
        const getUserService = new GetUserById();
        const userData = await getUserService.__invoke(user.uid);

        setUser(() => userData);
        setIsLoading(() => false);
        return;
      }

      setUser(() => null);
      setIsLoading(() => false);
    };

    firebase.auth().onAuthStateChanged(authStateChanged);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, changeUserAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};