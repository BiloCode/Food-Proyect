import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import NavigationBar from "components/organisms/NavigationBar";
import HomeBanner from "components/molecules/HomeBanner";
import PageLimiter from "components/atoms/PageLimiter";

const Home: FC<RouteComponentProps> = () => {
  return (
    <div>
      <NavigationBar />
      <PageLimiter>
        <HomeBanner />
      </PageLimiter>
    </div>
  );
};

export default Home;
