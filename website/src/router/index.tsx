import { lazy } from "react";
import { Router } from "@reach/router";
import { useAuthContext } from "context/AuthContext/context";
import RedirectToHome from "components/pages/RedirectToHome";

const HomeLazy = lazy(() => import("components/pages/Home"));
const LoginLazy = lazy(() => import("components/pages/Login"));
const RegisterLazy = lazy(() => import("components/pages/Register"));
const ProfileLazy = lazy(() => import("components/pages/Profile"));
const BranchOfficeLazy = lazy(
  () => import("components/pages/BranchOfficeList")
);
const BranchOfficeMapsLazy = lazy(
  () => import("components/pages/BranchOfficeMaps")
);

const RouterApplication = () => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) return null;

  return (
    <Router>
      <HomeLazy path="/" />
      <BranchOfficeLazy path="/branch-office" />
      <ProfileLazy path="/user/:id" />
      {!user && (
        <>
          <LoginLazy path="/login" />
          <RegisterLazy path="/register" />
        </>
      )}
      <BranchOfficeMapsLazy path="/map" />
      <RedirectToHome path="*" />
    </Router>
  );
};

export default RouterApplication;
