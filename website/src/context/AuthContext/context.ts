import { createContext, useContext } from "react";

export type UserAuthContextType = {
  _id: string;
};

type AuthContextType = {
  user?: UserAuthContextType;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export const useAuthContext = () => useContext(AuthContext);
