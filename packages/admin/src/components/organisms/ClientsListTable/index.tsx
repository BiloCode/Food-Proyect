import { memo } from "react";
import * as S from "./styles";

import { Client } from "@food/shared-types";
import ClientsTableRow from "components/molecules/ClientsTableRow";
import ClientsTableHeaders from "components/molecules/ClientsTableHeaders";

import { useAtomValue } from "jotai/utils";
import { CLIENTS_LIST_TABLE_ROWS } from "config/constants";

import { currentPageInClient } from "store/currentPageInClient";

type ClientsListProps = {
  clients: Client[];
};

const ClientsList = ({ clients }: ClientsListProps) => {
  const currentPage = useAtomValue(currentPageInClient);

  const baseItemsNumber = currentPage * CLIENTS_LIST_TABLE_ROWS;
  const pageInit = baseItemsNumber;
  const pageFinish = baseItemsNumber + CLIENTS_LIST_TABLE_ROWS;

  const filterList = [...clients].filter(
    (_, i) => i >= pageInit && i < pageFinish
  );

  return (
    <S.Container>
      <ClientsTableHeaders />
      {filterList.map((v, i) => (
        <ClientsTableRow key={i} client={v} />
      ))}
    </S.Container>
  );
};
export default memo(ClientsList);
