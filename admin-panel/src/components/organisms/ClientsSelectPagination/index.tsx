import { ClientModelType } from "application/types/ClientModelType";
import PaginationButton from "components/atoms/PaginationButton";
import { useEffect, useState } from "react";
import * as S from "./styles";

type ClientsSelectPaginationProps = {
  onClickPage(pageInit: number, pageFinish: number): void;
  clients: ClientModelType[];
  clientsForPage: number;
};

const ClientsSelectPagination = ({
  onClickPage,
  clients,
  clientsForPage,
}: ClientsSelectPaginationProps) => {
  const [clientsPageLength, setClientsPageLength] = useState<number>(1);

  const [actualPage, setActualPage] = useState<number>(1);

  const setterActualPage = (page: number) => {
    setActualPage(page);
  };

  useEffect(() => {
    const clientsLength = clients.length;
    if (clientsLength % clientsForPage === 0)
      setClientsPageLength(clientsLength / clientsForPage);
    else setClientsPageLength(Math.floor(clientsLength / clientsForPage) + 1);
  }, [clients]);

  return (
    <S.Container>
      {clients.map((_, i) => {
        if (i < clientsPageLength) {
          if (clientsPageLength === 1) return;
          return (
            <PaginationButton
              actualPage={actualPage}
              setterActualPage={setterActualPage}
              page={i}
              clientsForPage={clientsForPage}
              onClick={onClickPage}
            />
          );
        }
      })}
    </S.Container>
  );
};

export default ClientsSelectPagination;
