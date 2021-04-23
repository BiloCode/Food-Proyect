import { RouteComponentProps } from "@reach/router";
import SucursalSlider from "components/molecules/SucursalSlider";
import NavigationBar from "components/organisms/NavigationBar";
import SucursalContent from "components/organisms/SucursalContent";
import SucursalFilter from "components/organisms/SucursalFilter";
import { FC } from "react";

import * as S from "./styles";

const BranchOfficeList: FC<RouteComponentProps> = () => (
  <S.BranchOfficeListContainer>
    <NavigationBar />
    <SucursalSlider />
    <SucursalFilter />
    <SucursalContent />
  </S.BranchOfficeListContainer>
);

export default BranchOfficeList;
