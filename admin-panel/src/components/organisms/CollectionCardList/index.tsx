import * as S from "./styles";

import { AiOutlineTeam, AiOutlineShop, AiOutlineApple } from "react-icons/ai";

import Title from "components/atoms/Title";
import CollectionCard from "components/molecules/CollectionCard";

import useCollectionAllData from "hooks/useCollectionAllData";

const CollectionCardList = () => {
  const { clients, branchOffice, food } = useCollectionAllData();

  return (
    <S.MainContainer>
      <Title>Informacion Del Sistema</Title>
      <S.CollectionList>
        <CollectionCard
          icon={AiOutlineShop}
          color="yellow"
          collectionName="Mis Sucursales"
          isLoading={branchOffice.requestState === "loading"}
        />
        <CollectionCard
          icon={AiOutlineTeam}
          collectionName="Mis Clientes"
          isLoading={clients.requestState === "loading"}
        />
        <CollectionCard
          color="red"
          icon={AiOutlineApple}
          collectionName="Mis Comestibles"
          isLoading={food.requestState === "loading"}
        />
      </S.CollectionList>
    </S.MainContainer>
  );
};

export default CollectionCardList;
