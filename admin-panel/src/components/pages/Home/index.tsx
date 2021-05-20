import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import CollectionCard from "components/molecules/CollectionCard";

import { AiOutlineTeam, AiOutlineShop, AiOutlineApple } from "react-icons/ai";

import { useAtomValue } from "jotai/utils";
import { clientStore } from "store/clientStore";

const Home = (_: RouteComponentProps) => {
  const clients = useAtomValue(clientStore);

  return (
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
            icon={AiOutlineTeam}
            collectionName="Mis Clientes"
            isLoading={clients.requestState === "loading"}
          />
          <CollectionCard
            isLoading
            color="red"
            icon={AiOutlineApple}
            collectionName="Mis Comestibles"
          />
        </S.CollectionList>
      </S.MainContainer>
    </PageWithSidebarBox>
  );
};

export default Home;
