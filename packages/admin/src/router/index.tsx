import { Router } from "@reach/router";

import PageLoading from "components/atoms/PageLoading";

import Home from "components/pages/Home";
import Food from "components/pages/Food";
import Login from "components/pages/Login";
import Clients from "components/pages/Clients";
import BranchOffices from "components/pages/BranchOffices";
import BranchOfficeDetail from "components/pages/BranchOfficeDetail";
import DefaultPage from "components/pages/DefaultPage";

import { useAtomValue } from "jotai/utils";
import { userAuth } from "store/userAuth";

const RouterApplication = () => {
  const userStore = useAtomValue(userAuth);

  if (userStore.requestState === "loading") return <PageLoading />;

  return (
    <Router>
      <DefaultPage default />
      {userStore.user ? (
        <>
          <Home path="/" />
          <BranchOffices path="/branch/list" />
          <BranchOfficeDetail path="/branch/:id" />
          <Clients path="/clients" />
          <Food path="/food" />
        </>
      ) : (
        <Login path="/" />
      )}
    </Router>
  );
};

export default RouterApplication;
