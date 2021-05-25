import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import HeaderTitle from "components/molecules/HeaderTitle";
import ClientsList from "components/organisms/ClientsList";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import InputWithIcon from "components/molecules/InputWithIcon";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";

import { IoMdSearch } from "react-icons/io";
import ClientsSelectPagination from "components/organisms/ClientsSelectPagination";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { clientStore } from "store/clientStore";
import { useAtomValue } from "jotai/utils";
import { ClientModelType } from "application/types/ClientModelType";

type ClientsListType = {
  pageInit: number;
  pageFinish: number;
};

const Clients = (_: RouteComponentProps) => {
  const { data, requestState } = useAtomValue(clientStore);

  const [actualPage, setActualPage] = useState<ClientsListType>({
    pageInit: 1,
    pageFinish: 10,
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
      pageFinish: 10,
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
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle title="Usuarios registrados" />
        <S.SearchContainer>
          <InputWithIcon
            icon={IoMdSearch}
            text="Digite un nombre..."
            onChange={onChangeSearch}
          />
        </S.SearchContainer>
        <S.ClientsContainer>
          <ClientsList
            clients={clientsFilter}
            pageInit={actualPage.pageInit}
            pageFinish={actualPage.pageFinish}
          />
          <ClientsSelectPagination
            clients={clientsFilter}
            onClickPage={onClickPage}
          />
        </S.ClientsContainer>
      </PageLimiterContainer>
    </PageWithSidebarBox>
  );
};

export default Clients;
