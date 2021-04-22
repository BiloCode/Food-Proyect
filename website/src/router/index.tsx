import { lazy } from "react";
import { Router } from "@reach/router";
import { useAuthContext } from "context/AuthContext/context";

const HomeLazy = lazy(() => import("components/pages/Home"));
const LoginLazy = lazy(() => import("components/pages/Login"));
const RegisterLazy = lazy(() => import("components/pages/Register"));
const ProfileLazy = lazy(() => import("components/pages/Profile"));
const BranchOfficeLazy = lazy(
  () => import("components/pages/BranchOfficeList")
);

const RouterApplication = () => {
  const { user } = useAuthContext();

  return (
    <Router>
      <HomeLazy path="/" />
      <BranchOfficeLazy path="/branch-office" />
      <ProfileLazy path="/profile/:id" />
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
