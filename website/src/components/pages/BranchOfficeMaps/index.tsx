import { RouteComponentProps } from "@reach/router";
import { FC } from "react";
import * as S from "./styles";

import MapProvider from "context/MapContext/provider";
import BranchOfficeMaps from "components/organisms/BranchOfficeMaps";

const BranchOfficeList: FC<RouteComponentProps> = () => (
  <S.MainContainer>
    <MapProvider>
      <BranchOfficeMaps />
    </MapProvider>
  </S.MainContainer>
);

export default BranchOfficeList;
