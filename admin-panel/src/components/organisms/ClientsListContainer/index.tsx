import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";

import { ClientModelType } from "application/types/ClientModelType";

import ClientsListTable from "../ClientsListTable";
import SearchBar from "components/molecules/SearchBar";
import ClientsSelectPagination from "../ClientsSelectPagination";

import { useAtomValue } from "jotai/utils";
import { clients } from "store/clients";

import { CLIENTS_LIST_TABLE_ROWS } from "config/constants";
import { useAtom } from "jotai";
import { currentPageInClient } from "store/currentPageInClient";

const ClientsListContainer = () => {
  const client = useAtomValue(clients);

  const [clientsFilter, setClientsFilter] = useState<ClientModelType[]>([]);
  const [currentPage, setCurrentPage] = useAtom(currentPageInClient);

  const onChangeSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target?.value.toLocaleUpperCase();
    const newList = [...client.data].filter((v) => {
      const clientDescription = v.fullName.toLocaleUpperCase();
      return clientDescription.includes(inputValue);
    });
    setCurrentPage(0);
    setClientsFilter(() => newList);
  };

  useEffect(() => {
    if (client.requestState !== "complete") return;

    setClientsFilter(client.data);
  }, [client.requestState]);

  return (
    <>
      <S.SearchContainer>
        <SearchBar
          placeholder="Digite un nombre..."
          onChange={onChangeSearch}
        />
      </S.SearchContainer>
      <S.ClientsContainer>
        <ClientsListTable clients={clientsFilter} />
        <ClientsSelectPagination
          numberOfPages={Math.ceil(
            clientsFilter.length / CLIENTS_LIST_TABLE_ROWS
          )}
        />
      </S.ClientsContainer>
    </>
  );
};

export default ClientsListContainer;
