import "./routerEventListener";

import { lazy } from "react";
import { Router } from "@reach/router";
import { useAuthContext } from "context/AuthContext/context";

import RedirectToHome from "components/pages/RedirectToHome";
import FallbackLoading from "components/molecules/FallbackLoading";

const HomeLazy = lazy(() => import("components/pages/Home"));
const LoginLazy = lazy(() => import("components/pages/Login"));
const RegisterLazy = lazy(() => import("components/pages/Register"));
const ProfileLazy = lazy(() => import("components/pages/Profile"));

const BranchOfficeListLazy = lazy(
  () => import("components/pages/BranchOfficeList")
);
const BranchOfficeMapsLazy = lazy(
  () => import("components/pages/BranchOfficeMaps")
);

const BranchOfficeDetailLazy = lazy(
  () => import("components/pages/BranchOfficeDetail")
);

const RouterApplication = () => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) return <FallbackLoading />;

  return (
    <Router>
      <HomeLazy path="/" />
      <BranchOfficeListLazy path="/branch-office" />
      <BranchOfficeDetailLazy path="/branch-office/:branchOfficeId" />
      <ProfileLazy path="/user/:userPageId" />
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
