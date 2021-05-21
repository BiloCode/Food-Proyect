import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import SystemStorage from "components/organisms/SystemStorage";
import SystemStatistics from "components/organisms/SystemStatistics";
import CollectionCardList from "components/organisms/CollectionCardList";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

const Home = (_: RouteComponentProps) => (
  <PageWithSidebarBox>
    <S.MainContainer>
      <CollectionCardList />
      <SystemStatistics />
      <SystemStorage />
    </S.MainContainer>
  </PageWithSidebarBox>
);

export default Home;
