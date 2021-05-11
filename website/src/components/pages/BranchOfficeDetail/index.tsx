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

const BranchOfficeDetail: FC<RouteComponentProps> = ({}) => {
  const { active: menuActive, toggleActive: menuToggleActive } = useActive();
  const {
    userAuth,
    branchOffice: { data, uAuthPuntuaction },
  } = useGetBranchOfficeDetail();

  return (
    <div>
      <NavigationBar />
      {data && (
        <>
          <ParallaxImage
            styles={{ size: "small" }}
            src={data.bannerImage.url}
          />
          <S.ContainerContent>
            <S.ContainerBranchData>
              <BODetailText
                name={data.name}
                stars={data.stars}
                foodType={data.foodType}
                description={data.description}
              />
              <S.MainContainer>
                <S.TitleContainer>
                  <Title color="black" size="medium">
                    Valoraciones del lugar
                  </Title>
                  {userAuth && (
                    <UserPuntuactionArea uAuthPuntuaction={uAuthPuntuaction} />
                  )}
                </S.TitleContainer>
                <BODetailPuntuactionList cardList={data.puntuactions} />
              </S.MainContainer>
            </S.ContainerBranchData>
            <div>
              <BOMostPopularFoodCard onClick={menuToggleActive} />
            </div>
          </S.ContainerContent>
          <Footer />
        </>
      )}
      {menuActive && <BranchOfficeDetailMenu onClose={menuToggleActive} />}
    </div>
  );
};

export default BranchOfficeDetail;
