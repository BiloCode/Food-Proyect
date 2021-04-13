import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import HomeInformationWithImage from "components/organisms/HomeInformationWithImage";
import * as S from "./styles";

const Home: FC<RouteComponentProps> = () => {
  return (
    <S.HomeContainer>
      <HomeInformationWithImage />
    </S.HomeContainer>
  );
};

export default Home;
