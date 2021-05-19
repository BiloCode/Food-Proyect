import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import CollectionCard from "components/molecules/CollectionCard";

import { AiOutlineTeam, AiOutlineShop, AiOutlineApple } from "react-icons/ai";

const Home: FC<RouteComponentProps> = () => (
  <PageWithSidebarBox>
    <S.MainContainer>
      <S.CollectionList>
        <CollectionCard
          isLoading
          icon={AiOutlineShop}
          color="yellow"
          collectionName="Mis Sucursales"
        />
        <CollectionCard
          isLoading
          icon={AiOutlineTeam}
          collectionName="Usuarios"
        />
        <CollectionCard
          isLoading
          color="red"
          icon={AiOutlineApple}
          collectionName="Comestibles"
        />
      </S.CollectionList>
    </S.MainContainer>
  </PageWithSidebarBox>
);

export default Home;
