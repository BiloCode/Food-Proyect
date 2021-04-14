import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Navbar from "components/organisms/Navbar";
import HomeAboutUs from "components/organisms/HomeAboutUs";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.HomeContainer>
      <Navbar />
      <HomeAboutUs />
    </S.HomeContainer>
  );
};

export default Home;
