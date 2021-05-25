import { ClientModelType } from "application/types/ClientModelType";
import { useEffect, useState } from "react";
import * as S from "./styles";

type ClientsSelectPaginationProps = {
  onClickPage(pageInit: number, pageFinish: number): void;
  clients: ClientModelType[];
};

const ClientsSelectPagination = ({
  onClickPage,
  clients,
}: ClientsSelectPaginationProps) => {
  const [clientsPageLength, setClientsPageLength] = useState<number>(1);

  useEffect(() => {
    const totalLength = clients.length;
    if (totalLength % 10 === 0) setClientsPageLength(totalLength / 10);
    else setClientsPageLength(Math.floor(totalLength / 10) + 1);
  }, [clients]);

  return (
    <S.Container>
      {clients.map((_, i) => {
        if (i < clientsPageLength) {
          if (clientsPageLength === 1) return;
          return (
            <S.PageButton
              key={i}
              onClick={() => onClickPage(i * 10 + 1, i * 10 + 10)}
            >
              {i + 1}
            </S.PageButton>
          );
        }
      })}
    </S.Container>
  );
};

export default ClientsSelectPagination;
