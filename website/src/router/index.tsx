import { lazy } from "react";
import { Router } from "@reach/router";
import { useAuthContext } from "context/AuthContext/context";

const HomeLazy = lazy(() => import("components/pages/Home"));
const LoginLazy = lazy(() => import("components/pages/Login"));
const RegisterLazy = lazy(() => import("components/pages/Register"));

const RouterApplication = () => {
  const { user } = useAuthContext();

  return (
    <Router>
      <HomeLazy path="/" />
      {!user && (
        <>
          <LoginLazy path="/login" />
          <RegisterLazy path="/register" />
        </>
      )}
    </Router>
  );
};

export default RouterApplication;
