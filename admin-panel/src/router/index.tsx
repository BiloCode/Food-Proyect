import { Router } from "@reach/router";
import Spinner from "components/atoms/Spinner";

import Home from "components/pages/Home";
import Login from "components/pages/Login";

import { useAtom } from "jotai";
import { userAuth } from "store/userAuth";

const RouterApplication = () => {
  const [userStore] = useAtom(userAuth);

  if (userStore.requestState === "loading") return <Spinner color="blue" />;

  return (
    <Router>{userStore.user ? <Home path="/" /> : <Login path="/" />}</Router>
  );
};

export default RouterApplication;
