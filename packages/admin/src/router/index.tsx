import "./eventListener";

import { Router } from "@reach/router";

import PageLoading from "components/atoms/PageLoading";

import Home from "components/pages/Home";
import Food from "components/pages/Food";
import Clients from "components/pages/Clients";
import BranchOffices from "components/pages/BranchOffices";
import BranchOfficeDetail from "components/pages/BranchOfficeDetail";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { userAuth } from "store/userAuth";
import { useEffect, useRef } from "react";
import { branchOffice } from "store/branchOffice";

import GetAllBranchOffice from "application/core/GetAllBranchOffice";

const RouterLoginOk = () => {
  const setBranchData = useUpdateAtom(branchOffice);

  const xx = async () => {
    const branchOffices = await GetAllBranchOffice.exec();
    setBranchData({
      data: branchOffices,
      requestState: "complete",
    });
  };

  const ref = useRef(xx);

  useEffect(() => {
    ref.current();
  }, []);

  return (
    <Router>
      <Home path="/" />
      <BranchOffices path="/branch/list" />
      <BranchOfficeDetail path="/branch/:id" />
      <Clients path="/clients" />
      <Food path="/food" />
    </Router>
  );
};

const RouterApplication = () => {
  const userStore = useAtomValue(userAuth);

  if (userStore.requestState === "loading") return <PageLoading />;

  return <RouterLoginOk />;
};

export default RouterApplication;
