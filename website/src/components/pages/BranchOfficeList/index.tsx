import { RouteComponentProps } from "@reach/router";
import NavigationBar from "components/organisms/NavigationBar";
import SucursalContent from "components/organisms/SucursalContent";
import { FC } from "react";

import * as S from "./styles";

const BranchOfficeList: FC<RouteComponentProps> = () => (
  <S.BranchOfficeListContainer>
    <NavigationBar />
    <SucursalContent />
  </S.BranchOfficeListContainer>
);

export default BranchOfficeList;
