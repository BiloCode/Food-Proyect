import * as S from "./styles";
import { IoMdSearch } from "react-icons/io";
import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import BranchOfficeMapList from "components/molecules/BranchOfficeMapList";
import BranchOfficeGoogleMaps from "components/molecules/BranchOfficeGoogleMaps";
import Logo from "assets/images/Logo.svg";
import Image from "components/atoms/Image";
import { IoIosArrowBack } from "react-icons/io";
import Icon from "components/atoms/Icon";
import Description from "components/atoms/Description";
import { useNavigate } from "@reach/router";

const BranchOfficeMaps = () => {
  const navigate = useNavigate();
  const onClickHome = () => navigate("/home");

  return (
    <S.Container>
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
                <Icon color="white" size="small-medium" Type={IoIosArrowBack} />
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
    </S.Container>
  );
};

export default BranchOfficeMaps;
