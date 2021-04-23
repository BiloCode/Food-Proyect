import { ClientModelType } from "application/types/ClientModelType";
import { createContext, useContext } from "react";

type AuthContextType = {
  user?: ClientModelType;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export const useAuthContext = () => useContext(AuthContext);
