import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import { HomeInformation } from "components/molecules/HomeInformation/styles";
import Navbar from "components/organisms/Navbar";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.HomeContainer>
      <Navbar />
    </S.HomeContainer>
  );
};

export default Home;
