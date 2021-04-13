import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import HomeInformationImageContainer from "components/organisms/HomeInformationImage";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.HomeContainer>
      <HomeInformationImageContainer />
    </S.HomeContainer>
  );
};

export default Home;
