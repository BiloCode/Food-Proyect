import { createContext, useContext } from "react";

type AuthContextType = {
  user: null;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
});

export const useAuthContext = () => useContext(AuthContext);
