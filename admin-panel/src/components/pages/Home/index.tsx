import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import CollectionCardList from "components/organisms/CollectionCardList";

const Home = (_: RouteComponentProps) => (
  <PageWithSidebarBox>
    <S.MainContainer>
      <CollectionCardList />
    </S.MainContainer>
  </PageWithSidebarBox>
);

export default Home;
