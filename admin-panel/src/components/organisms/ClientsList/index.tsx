import * as S from "./styles";

import { ClientModelType } from "application/types/ClientModelType";
import ClientsTableRow from "components/molecules/ClientsTableRow";
import ClientsTableHeaders from "components/molecules/ClientsTableHeaders";

type ClientsListProps = {
  pageInit: number;
  pageFinish: number;
  clients: ClientModelType[];
  clientsForPage: number;
};

const ClientsList = ({
  pageInit,
  pageFinish,
  clients,
  clientsForPage,
}: ClientsListProps) => {
  return (
    <S.Container clientsForPage={clientsForPage}>
      <ClientsTableHeaders />

      {clients?.map((v, i) => {
        if (i + 1 >= pageInit && i < pageFinish) {
          return <ClientsTableRow key={i} client={v} />;
        }
      })}
    </S.Container>
  );
};
export default ClientsList;
