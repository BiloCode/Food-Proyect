import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import NavigationBar from "components/organisms/NavigationBar";
import Footer from "components/organisms/Footer";
import HomeSearch from "components/organisms/HomeSearch";
import HomeBanner from "components/organisms/HomeBanner";
import HomeAboutUs from "components/organisms/HomeAboutUs";
import HomeCharacterist from "components/organisms/HomeCharacteristList";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.HomeContainer>
      <NavigationBar />
      <HomeBanner />
      <HomeAboutUs />
      <HomeCharacterist />
      <HomeSearch />
      <Footer />
    </S.HomeContainer>
  );
};

export default Home;
