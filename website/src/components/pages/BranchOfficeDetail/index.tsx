import { FC, useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "@reach/router";
import * as S from "./styles";

import Footer from "components/organisms/Footer";
import ParallaxImage from "components/atoms/ParallaxImage";
import BODetailText from "components/organisms/BODetailText";
import NavigationBar from "components/organisms/NavigationBar";
import BODetailReactionList from "components/templates/BODetailReactionList";
import BOMostPopularFoodCard from "components/molecules/BOMostPopularFoodCard";

import {
  BranchOfficeModelType,
  PuntuactionType,
} from "application/types/BranchOfficeModelType";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import BranchOfficeDetailMenu from "components/organisms/BranchOfficeDetailMenu";
import useActive from "hooks/useActive";

const BranchOfficeDetail: FC<RouteComponentProps> = ({}) => {
  const { user } = useAuthContext();
  const { branchOfficeId } = useParams();
  const { branchOffices } = useBranchOfficeContext();
  const { active, toggleActive } = useActive();

  const [currentData, setCurrentData] = useState<BranchOfficeModelType>();
  const [
    userAuthPuntuaction,
    setUserAuthPuntuaction,
  ] = useState<PuntuactionType>();

  useEffect(() => {
    const currentBranch = branchOffices.find((v) => v._id === branchOfficeId);
    const userAuthPuntuaction = currentBranch?.puntuactions.find(
      (v) => v._id === user?._id
    );

    setCurrentData(() => currentBranch);
    setUserAuthPuntuaction(() => userAuthPuntuaction);
  }, []);

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
                  description={currentData.description}
                  foodType={currentData.foodType}
                />
                <BODetailReactionList
                  puntuactionList={currentData.puntuactions}
                  userAuthPuntuaction={userAuthPuntuaction}
                />
              </S.ContainerBranchData>
              <div>
                <BOMostPopularFoodCard onClick={toggleActive} />
              </div>
            </S.ContainerContent>
            <Footer />
          </>
        )}
      </div>
      {active && <BranchOfficeDetailMenu />}
    </>
  );
};

export default BranchOfficeDetail;
