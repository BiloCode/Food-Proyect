import * as S from "./styles";

import { AiOutlineTeam, AiOutlineShop, AiOutlineApple } from "react-icons/ai";

import Title from "components/atoms/Title";
import CollectionCard from "components/molecules/CollectionCard";

import useCollectionAllData from "hooks/useCollectionAllData";
import { useNavigate } from "@reach/router";

const CollectionCardList = () => {
  const { clients, branchOffice, food } = useCollectionAllData();

  const navigate = useNavigate();

  const NavigateTo = (path: string) => () => navigate(path);

  return (
    <S.MainContainer>
      <Title>Informacion Del Sistema</Title>
      <S.CollectionList>
        <CollectionCard
          icon={AiOutlineShop}
          color="yellow"
          collectionName="Mis Sucursales"
          onClick={NavigateTo("/branch/list")}
          isLoading={branchOffice.requestState === "loading"}
        />
        <CollectionCard
          icon={AiOutlineTeam}
          collectionName="Mis Clientes"
          onClick={NavigateTo("/clients")}
          isLoading={clients.requestState === "loading"}
        />
        <CollectionCard
          color="red"
          icon={AiOutlineApple}
          collectionName="Mis Comestibles"
          onClick={NavigateTo("/food")}
          isLoading={food.requestState === "loading"}
        />
      </S.CollectionList>
    </S.MainContainer>
  );
};

export default CollectionCardList;
