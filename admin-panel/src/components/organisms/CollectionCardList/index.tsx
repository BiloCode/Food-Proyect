import * as S from "./styles";

import { AiOutlineTeam, AiOutlineShop, AiOutlineApple } from "react-icons/ai";

import Title from "components/atoms/Title";
import CollectionCard from "components/molecules/CollectionCard";

import { useAtomValue } from "jotai/utils";
import { clientStore } from "store/clientStore";
import { branchOfficeStore } from "store/branchOfficeStore";

const CollectionCardList = () => {
  const clients = useAtomValue(clientStore);
  const branchOffice = useAtomValue(branchOfficeStore);

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
