import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import Sidebar from "components/organisms/Sidebar";

const Home: FC<RouteComponentProps> = () => (
  <div>
    <Sidebar />
  </div>
);

export default Home;
