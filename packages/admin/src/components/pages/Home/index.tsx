import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import SystemStorage from "components/organisms/SystemStorage";
import SystemStatistics from "components/organisms/SystemStatistics";
import CollectionCardList from "components/organisms/CollectionCardList";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";

const Home = (_: RouteComponentProps) => (
  <PageWithSidebarBox>
    <PageLimiterContainer>
      <S.MainContainer>
        <CollectionCardList />
        <SystemStatistics />
        <SystemStorage />
      </S.MainContainer>
    </PageLimiterContainer>
  </PageWithSidebarBox>
);

export default Home;
