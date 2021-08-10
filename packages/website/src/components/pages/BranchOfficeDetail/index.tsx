import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Footer from "components/organisms/Footer";
import NavigationBar from "components/organisms/NavigationBar";

import useActive from "hooks/useActive";
import useGetBranchOfficeDetail from "hooks/useGetBranchOfficeDetail";

const BranchOfficeDetail: FC<RouteComponentProps> = () => {
  const { active: menuActive, toggleActive: menuToggleActive } = useActive();
  const { userAuth, branchOffice } = useGetBranchOfficeDetail();

  return (
    <S.MainContainer>
      <NavigationBar />
      <Footer />
    </S.MainContainer>
  );
};

export default BranchOfficeDetail;
