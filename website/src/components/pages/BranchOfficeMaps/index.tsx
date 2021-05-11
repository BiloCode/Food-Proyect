import { RouteComponentProps } from "@reach/router";
import { ChangeEvent, FC, useState } from "react";
import * as S from "./styles";

import Image from "components/atoms/Image";
import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import BranchOfficeMapList from "components/molecules/BranchOfficeMapList";
import Icon from "components/atoms/Icon";
import Description from "components/atoms/Description";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "assets/images/Logo.svg";
import MapProvider from "context/MapContext/provider";
import MapCredentials from "components/molecules/Map";

const BranchOfficeMap: FC<RouteComponentProps> = ({ navigate }) => {
  const [branchOfficeName, setBranchOfficeName] = useState("");

  const onClickHome = () => navigate("/home");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBranchOfficeName(e.target.value);
  };

  return (
    <S.MainContainer>
      <MapProvider>
        <div>
          <S.Image>
            <Image src={Logo} />
          </S.Image>
          <S.InformationContainer>
            <S.SearchContainer>
              <InputPlaceholderIcon
                icon={IoMdSearch}
                text="Escribe un nombre..."
                onChange={onChange}
              />
            </S.SearchContainer>
            <BranchOfficeMapList branchOfficeName={branchOfficeName} />
            <S.ReturnMenuContainer>
              <S.ReturnMenu onClick={onClickHome}>
                <S.IconContainer>
                  <Icon
                    color="white"
                    size="small-medium"
                    Type={IoIosArrowBack}
                  />
                </S.IconContainer>
                <div>
                  <Description color="black" size="medium">
                    Regresar al menú principal
                  </Description>
                </div>
              </S.ReturnMenu>
            </S.ReturnMenuContainer>
          </S.InformationContainer>
        </div>
        <MapCredentials />
      </MapProvider>
    </S.MainContainer>
  );
};

export default BranchOfficeMap;
