import { RouteComponentProps, useNavigate } from "@reach/router";
import { FC } from "react";
import * as S from "./styles";

import Image from "components/atoms/Image";
import BranchOfficeMapList from "components/molecules/BranchOfficeMapList";
import Logo from "assets/images/Logo.svg";
import MapProvider from "context/MapContext/provider";
import MapCredentials from "components/molecules/Map";
import ReturnHomeButton from "components/molecules/ReturnHomeButton";
import SearchBranchOffice from "components/organisms/SearchBranchOffice";

const BranchOfficeMap: FC<RouteComponentProps> = () => {
  const navigate = useNavigate();

  const onClickHome = () => navigate("/home");

  return (
    <S.MainContainer>
      <MapProvider>
        <div>
          <S.Image>
            <Image src={Logo} />
          </S.Image>
          <S.InformationContainer>
            <SearchBranchOffice />
            <BranchOfficeMapList />
            <ReturnHomeButton onClick={onClickHome} />
          </S.InformationContainer>
        </div>
        <MapCredentials />
      </MapProvider>
    </S.MainContainer>
  );
};

export default BranchOfficeMap;
