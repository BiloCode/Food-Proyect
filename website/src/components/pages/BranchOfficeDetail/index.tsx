import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps, useParams } from "@reach/router";

import Footer from "components/organisms/Footer";
import ParallaxImage from "components/atoms/ParallaxImage";
import BODetailText from "components/organisms/BODetailText";
import NavigationBar from "components/organisms/NavigationBar";
import BODetailReactionList from "components/templates/BODetailReactionList";
import BOMostPopularFoodCard from "components/molecules/BOMostPopularFoodCard";

const BranchOfficeDetail: FC<RouteComponentProps> = (props) => {
  const params = useParams();

  const NavigateToMenu = () => {
    props.navigate(`/branch-office/${params.branchOfficeId}/menu`);
  };

  return (
    <>
      <div>
        <NavigationBar />
        <ParallaxImage
          styles={{ size: "small" }}
          src="https://s3.amazonaws.com/semanaeconomica.bucket/semanaeconomica2/articles/banner/2817_1571497931_banner.jpg"
        />
        <S.ContainerContent>
          <S.ContainerBranchData>
            <BODetailText />
            <BODetailReactionList />
          </S.ContainerBranchData>
          <div>
            <BOMostPopularFoodCard onClick={NavigateToMenu} />
          </div>
        </S.ContainerContent>
        <Footer />
      </div>
      {props.children}
    </>
  );
};

export default BranchOfficeDetail;
