import { ClientModelType } from "application/types/ClientModelType";
import InputWithIcon from "components/molecules/InputWithIcon";
import { useAtomValue } from "jotai/utils";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { clientStore } from "store/clientStore";
import ClientsList from "../ClientsList";
import ClientsSelectPagination from "../ClientsSelectPagination";
import * as S from "./styles";
import { IoMdSearch } from "react-icons/io";

type ClientsListType = {
  pageInit: number;
  pageFinish: number;
};

const ClientsListContainer = () => {
  const { data, requestState } = useAtomValue(clientStore);

  const clientsForPage = 8;

  const [actualPage, setActualPage] = useState<ClientsListType>({
    pageInit: 1,
    pageFinish: clientsForPage,
  });

  const [clientsFilter, setClientsFilter] = useState<ClientModelType[]>(data);

  const onClickPage = (pageInit: number, pageFinish: number) => {
    setActualPage({
      pageInit,
      pageFinish,
    });
  };

  useEffect(() => {
    if (requestState !== "complete") return;
    setClientsFilter(data);
  }, [requestState]);

  useMemo(() => {
    setActualPage({
      pageInit: 1,
      pageFinish: clientsForPage,
    });
  }, [clientsFilter]);

  const onChangeSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.target.value = ev.target.value.toLocaleUpperCase();
    const inputValue = ev.target.value;
    const filteredList = [...data].filter((v) => {
      const clientDescription = v.fullName.toLocaleUpperCase();
      return clientDescription.includes(inputValue);
    });
    setClientsFilter(() => filteredList);
  };

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
        <ClientsList
          clientsForPage={clientsForPage}
          clients={clientsFilter}
          pageInit={actualPage.pageInit}
          pageFinish={actualPage.pageFinish}
        />
        <ClientsSelectPagination
          clientsForPage={clientsForPage}
          clients={clientsFilter}
          onClickPage={onClickPage}
        />
      </S.ClientsContainer>
    </>
  );
};

export default ClientsListContainer;
