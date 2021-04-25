import { RouteComponentProps } from "@reach/router";
import Slider from "components/molecules/Slider";
import Footer from "components/organisms/Footer";
import NavigationBar from "components/organisms/NavigationBar";
import BranchOfficeContent from "components/organisms/BranchOfficeContent";
import BranchOfficeFilter from "components/organisms/BranchOfficeFilter";
import { FC } from "react";

import * as S from "./styles";

const BranchOfficeList: FC<RouteComponentProps> = () => (
  <S.MainContainer>
    <NavigationBar />
    <Slider />
    <BranchOfficeFilter />
    <BranchOfficeContent />
    <Footer />
  </S.MainContainer>
);

export default BranchOfficeList;
