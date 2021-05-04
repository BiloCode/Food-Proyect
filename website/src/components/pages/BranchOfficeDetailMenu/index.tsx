import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import DarkScreen from "components/atoms/DarkScreen";
import Portals from "components/atoms/Portals";

const BranchOfficeDetailMenu: FC<RouteComponentProps> = () => (
  <Portals>
    <DarkScreen>
      <div></div>
    </DarkScreen>
  </Portals>
);

export default BranchOfficeDetailMenu;
