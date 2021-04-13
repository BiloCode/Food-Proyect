import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import { HomeInformation } from "components/molecules/HomeInformation/styles";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.HomeContainer>
      <HomeInformation />
    </S.HomeContainer>
  );
};

export default Home;
