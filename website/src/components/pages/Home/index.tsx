import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Navbar from "components/organisms/Navbar";
import HomeAboutUs from "components/organisms/HomeAboutUs";
import HomeBanner from "components/organisms/HomeBanner";
import Footer from "components/organisms/Footer";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <HomeBanner />
      <HomeAboutUs />
      <Footer />
    </S.HomeContainer>
  );
};

export default Home;
