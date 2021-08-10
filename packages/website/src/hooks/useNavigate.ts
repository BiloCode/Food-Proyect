import { useNavigate } from "@reach/router";

const useNavigateRouter = () => {
  const navigate = useNavigate();

  return {
    navigateToLogin: () => navigate("/login"),
    navigateToRegister: () => navigate("/register"),
    navigateToProfile: (userId: string) => () => navigate(`/user/${userId}`),
  };
};

export default useNavigateRouter;
