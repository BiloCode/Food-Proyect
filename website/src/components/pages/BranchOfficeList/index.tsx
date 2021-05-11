import { FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Slider from "components/molecules/Slider";
import Footer from "components/organisms/Footer";
import NavigationBar from "components/organisms/NavigationBar";
import BranchOfficeContent from "components/organisms/BranchOfficeContent";
import BranchOfficeFilter from "components/organisms/BranchOfficeFilter";

const BranchOfficeList: FC<RouteComponentProps> = () => {
  return (
    <S.MainContainer>
      <NavigationBar />
      <Slider />
      <S.ContainerElements>
        <BranchOfficeFilter />
        <BranchOfficeContent />
      </S.ContainerElements>
      <Footer />
    </S.MainContainer>
  );
};

export default BranchOfficeList;
