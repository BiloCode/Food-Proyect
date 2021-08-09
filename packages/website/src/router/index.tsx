import "./routerEventListener";

import { Router } from "@reach/router";
import { useAuthContext } from "context/AuthContext/context";

import RedirectToHome from "components/pages/RedirectToHome";
import FallbackLoading from "components/molecules/FallbackLoading";

import Home from "components/pages/Home";
import Login from "components/pages/Login";
import Profile from "components/pages/Profile";
import Register from "components/pages/Register";
import BranchOfficeList from "components/pages/BranchOfficeList";
import BranchOfficeDetail from "components/pages/BranchOfficeDetail";
import BranchOfficeMap from "components/pages/BranchOfficeMaps";

const RouterApplication = () => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) return <FallbackLoading />;

  return (
    <Router>
      <Home path="/" />
      <BranchOfficeList path="/branch-office" />
      <BranchOfficeDetail path="/branch-office/:branchOfficeId" />
      <Profile path="/user/:userPageId" />
      {!user && (
        <>
          <Login path="/login" />
          <Register path="/register" />
        </>
      )}
      <RedirectToHome path="*" />
      <BranchOfficeMap path="/map" />
    </Router>
  );
};

export default RouterApplication;
