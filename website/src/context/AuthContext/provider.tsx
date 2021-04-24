import { FC, useEffect, useState } from "react";
import firebase from "firebase";

import GetUserById from "application/core/GetUserById";
import { ClientModelType } from "application/types/ClientModelType";
import { AuthContext } from "./context";

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<ClientModelType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
