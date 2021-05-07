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

const BranchOfficeDetail: FC<RouteComponentProps> = ({
  children,
  navigate,
}) => {
  const { user } = useAuthContext();
  const { branchOfficeId } = useParams();
  const { branchOffices } = useBranchOfficeContext();

  const [currentData, setCurrentData] = useState<BranchOfficeModelType>();
  const [
    userAuthPuntuaction,
    setUserAuthPuntuaction,
  ] = useState<PuntuactionType>();

  const NavigateToMenu = () => {
    navigate(`/branch-office/${branchOfficeId}/menu`);
  };

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
                <BOMostPopularFoodCard onClick={NavigateToMenu} />
              </div>
            </S.ContainerContent>
            <Footer />
          </>
        )}
      </div>
      {children}
    </>
  );
};

export default BranchOfficeDetail;
