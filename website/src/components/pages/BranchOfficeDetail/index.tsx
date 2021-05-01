import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

import Footer from "components/organisms/Footer";
import ParallaxImage from "components/atoms/ParallaxImage";
import BODetailText from "components/organisms/BODetailText";
import NavigationBar from "components/organisms/NavigationBar";
import BOMostPopularFoodCard from "components/molecules/BOMostPopularFoodCard";

const BranchOfficeDetail: FC<RouteComponentProps> = () => (
  <div>
    <NavigationBar />
    <ParallaxImage
      styles={{ size: "small" }}
      src="https://s3.amazonaws.com/semanaeconomica.bucket/semanaeconomica2/articles/banner/2817_1571497931_banner.jpg"
    />
    <S.ContainerContent>
      <div>
        <BODetailText />
      </div>
      <div>
        <BOMostPopularFoodCard />
      </div>
    </S.ContainerContent>
    <Footer />
  </div>
);

export default BranchOfficeDetail;
