import firebase from "firebase";
import { FC, useEffect, useState } from "react";

import { AuthContext, UserAuthContextType } from "./context";

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserAuthContextType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(() => false);
        setUser(() => ({
          _id: user.uid,
        }));
        return;
      }

      setUser(() => null);
      setIsLoading(() => false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
