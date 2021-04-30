import { ClientModelType } from "application/types/ClientModelType";
import { createContext, useContext } from "react";

type AuthContextType = {
  user?: ClientModelType;
  isLoading: boolean;
  changeUserAuthData(user: ClientModelType): void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  changeUserAuthData() {},
});

export const useAuthContext = () => useContext(AuthContext);
