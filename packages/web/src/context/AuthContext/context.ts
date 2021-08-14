import { Types } from "@food/shared";
import { createContext, useContext } from "react";

type AuthContextType = {
  isLoading: boolean;
  user?: Types.Client;
  changeUserAuthData(user: Types.Client): void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  changeUserAuthData() {},
});

export const useAuthContext = () => useContext(AuthContext);
