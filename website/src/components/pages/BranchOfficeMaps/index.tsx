import { RouteComponentProps } from "@reach/router";
import NavigationBar from "components/organisms/NavigationBar";
import { FC } from "react";
import * as S from "./styles";
import BranchOfficeMaps from "components/organisms/BranchOfficeMaps";

const BranchOfficeList: FC<RouteComponentProps> = () => (
  <S.MainContainer>
    <NavigationBar />

    <BranchOfficeMaps />
  </S.MainContainer>
);

export default BranchOfficeList;
