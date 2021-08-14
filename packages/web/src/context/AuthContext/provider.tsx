import { FC, useEffect, useState } from "react";
import firebase from "firebase";

import { Types } from "@food/shared";
import { AuthContext } from "./context";

import GetUserById from "application/core/GetUserById";

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<Types.Client>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const changeUserAuthData = (user: Types.Client) => {
    setUser(() => user);
  };

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
