import { RouteComponentProps } from "@reach/router";
import SucursalSlider from "components/molecules/SucursalSlider";
import Footer from "components/organisms/Footer";
import NavigationBar from "components/organisms/NavigationBar";
import SucursalContent from "components/organisms/SucursalContent";
import SucursalFilter from "components/organisms/SucursalFilter";
import { FC } from "react";

import * as S from "./styles";

const BranchOfficeList: FC<RouteComponentProps> = () => (
  <S.MainContainer>
    <NavigationBar />
    <SucursalSlider />
    <SucursalFilter />
    <SucursalContent />
    <Footer />
  </S.MainContainer>
);

export default BranchOfficeList;
