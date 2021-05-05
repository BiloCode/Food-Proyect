import { RouteComponentProps, useNavigate } from "@reach/router";
import { FC } from "react";
import * as S from "./styles";

import Image from "components/atoms/Image";
import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import BranchOfficeMapList from "components/molecules/BranchOfficeMapList";
import Icon from "components/atoms/Icon";
import Description from "components/atoms/Description";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import BranchOfficeGoogleMaps from "components/molecules/BranchOfficeGoogleMaps";
import Logo from "assets/images/Logo.svg";
import MapProvider from "context/MapContext/provider";

const BranchOfficeMap: FC<RouteComponentProps> = () => {
  const navigate = useNavigate();

  const onClickHome = () => navigate("/home");

  return (
    <MapProvider>
      <S.MainContainer>
        <div>
          <S.Image>
            <Image src={Logo} />
          </S.Image>
          <S.InformationContainer>
            <S.SearchContainer>
              <InputPlaceholderIcon
                icon={IoMdSearch}
                text="Escribe un nombre..."
              />
            </S.SearchContainer>
            <BranchOfficeMapList />
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
        <BranchOfficeGoogleMaps />
      </S.MainContainer>
    </MapProvider>
  );
};

export default BranchOfficeMap;
