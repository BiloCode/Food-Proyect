import * as S from "./styles";

import { AiOutlineTeam, AiOutlineShop, AiOutlineApple } from "react-icons/ai";

import Title from "components/atoms/Title";
import CollectionCard from "components/molecules/CollectionCard";

import { useAtomValue } from "jotai/utils";
import { clientStore } from "store/clientStore";

const CollectionCardList = () => {
  const clients = useAtomValue(clientStore);

  return (
    <S.MainContainer>
      <Title>Informacion Del Sistema</Title>
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
  );
};

export default CollectionCardList;
