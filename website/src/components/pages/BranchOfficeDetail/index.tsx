import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Footer from "components/organisms/Footer";
import ParallaxImage from "components/atoms/ParallaxImage";
import BODetailText from "components/organisms/BODetailText";
import NavigationBar from "components/organisms/NavigationBar";
import UserPuntuactionArea from "components/templates/UserPuntuactionArea";
import BOMostPopularFoodCard from "components/molecules/BOMostPopularFoodCard";
import BranchOfficeDetailMenu from "components/organisms/BranchOfficeMenuModal";
import BODetailPuntuactionList from "components/organisms/BODetailPuntuactionList";

import useActive from "hooks/useActive";
import useGetBranchOfficeDetail from "hooks/useGetBranchOfficeDetail";
import ContactInformation from "components/molecules/ContactInformation";

const BranchOfficeDetail: FC<RouteComponentProps> = ({}) => {
  const { active: menuActive, toggleActive: menuToggleActive } = useActive();
  const { userAuth, branchOffice } = useGetBranchOfficeDetail();

  return (
    <div>
      <NavigationBar />
      {branchOffice.data && (
        <>
          <ParallaxImage
            styles={{ size: "small" }}
            src={branchOffice.data.bannerImage.url}
          />
          <S.ContainerContent>
            <S.ContainerBranchData>
              <BODetailText
                stars={branchOffice.stars}
                name={branchOffice.data.name}
                foodType={branchOffice.data.foodType}
                description={branchOffice.data.description}
              />
              <S.MainContainer>
                <S.TitleContainer>
                  <Title color="black" size="medium">
                    Valoraciones del lugar
                  </Title>
                  {userAuth && (
                    <UserPuntuactionArea
                      uAuthPuntuaction={branchOffice.uAuthPuntuaction}
                    />
                  )}
                </S.TitleContainer>
                <BODetailPuntuactionList
                  cardList={branchOffice.data.puntuactions}
                />
              </S.MainContainer>
            </S.ContainerBranchData>
            <div>
              <BOMostPopularFoodCard
                onClick={menuToggleActive}
                sellMenu={branchOffice.data.menu[0]}
              />
            </div>
          </S.ContainerContent>
          <S.ContactContainer>
            <Title size="medium" color="black">
              Informacion de contacto
            </Title>
            <ContactInformation />
          </S.ContactContainer>
          <Footer />
        </>
      )}
      {menuActive && (
        <BranchOfficeDetailMenu
          onClose={menuToggleActive}
          listMenu={branchOffice.data.menu}
        />
      )}
    </div>
  );
};

export default BranchOfficeDetail;
