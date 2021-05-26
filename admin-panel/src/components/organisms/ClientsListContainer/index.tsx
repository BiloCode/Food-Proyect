import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";

import { IoMdSearch } from "react-icons/io";

import { ClientModelType } from "application/types/ClientModelType";

import ClientsListTable from "../ClientsListTable";
import InputWithIcon from "components/molecules/InputWithIcon";
import ClientsSelectPagination from "../ClientsSelectPagination";

import { useAtomValue } from "jotai/utils";
import { clientStore } from "store/clientStore";

import { CLIENTS_LIST_TABLE_ROWS } from "config/constants";

const ClientsListContainer = () => {
  const client = useAtomValue(clientStore);

  const [clientsFilter, setClientsFilter] = useState<ClientModelType[]>([]);

  const onChangeSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target.value;
    const newList = [...client.data].filter((v) => {
      const clientDescription = v.fullName.toLocaleUpperCase();
      return clientDescription.includes(inputValue);
    });

    setClientsFilter(() => newList);
  };

  useEffect(() => {
    if (client.requestState !== "complete") return;

    setClientsFilter(client.data);
  }, [client.requestState]);

  return (
    <>
      <S.SearchContainer>
        <InputWithIcon
          icon={IoMdSearch}
          text="Digite un nombre..."
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
