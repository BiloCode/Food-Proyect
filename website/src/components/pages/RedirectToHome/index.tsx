import { FC } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";

const RedirectToHome: FC<RouteComponentProps> = () => (
  <Redirect to="/" noThrow />
);

export default RedirectToHome;
