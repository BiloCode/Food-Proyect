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
import BranchOfficeDetailMenu from "components/organisms/BranchOfficeDetailMenu";
import BODetailPuntuactionList from "components/organisms/BODetailPuntuactionList";

import useBODetailInitialize from "hooks/useBODetailInitialize";

const BranchOfficeDetail: FC<RouteComponentProps> = ({}) => {
  const {
    user,
    menuActive,
    currentData,
    uAuthPuntuaction,
    toggleMenuActive,
  } = useBODetailInitialize();

  return (
    <>
      <div>
        <NavigationBar />
        {currentData && (
          <>
            <ParallaxImage
              styles={{ size: "small" }}
              src={currentData.bannerImage.url}
            />
            <S.ContainerContent>
              <S.ContainerBranchData>
                <BODetailText
                  stars={3}
                  name={currentData.name}
                  foodType={currentData.foodType}
                  description={currentData.description}
                />
                <S.MainContainer>
                  <S.TitleContainer>
                    <Title color="black" size="medium">
                      Valoraciones del lugar
                    </Title>
                    {user && (
                      <UserPuntuactionArea
                        uAuthPuntuaction={uAuthPuntuaction}
                      />
                    )}
                  </S.TitleContainer>
                  <BODetailPuntuactionList
                    cardList={currentData.puntuactions}
                  />
                </S.MainContainer>
              </S.ContainerBranchData>
              <div>
                <BOMostPopularFoodCard onClick={toggleMenuActive} />
              </div>
            </S.ContainerContent>
            <Footer />
          </>
        )}
      </div>
      {menuActive && <BranchOfficeDetailMenu />}
    </>
  );
};

export default BranchOfficeDetail;
