import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import PageLimiter from "components/atoms/PageLimiter";
import HomeBanner from "components/molecules/HomeBanner";
import NavigationBar from "components/organisms/NavigationBar";
import FoodMostPopular from "components/organisms/FoodMostPopular";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.MainContainer>
      <NavigationBar />
      <PageLimiter>
        <HomeBanner />
      </PageLimiter>
      <FoodMostPopular />
    </S.MainContainer>
  );
};

export default Home;
