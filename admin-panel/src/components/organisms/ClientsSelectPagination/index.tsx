import * as S from "./styles";

import PaginationButton from "components/atoms/PaginationButton";

import { useAtom } from "jotai";
import { currentPageInClient } from "store/currentPageInClient";

type PaginationProps = {
  numberOfPages: number;
};

const ClientsSelectPagination = ({ numberOfPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useAtom(currentPageInClient);

  const arrayRender = new Array(numberOfPages).fill("");
  const onClickPageButton = (index: number) => () => {
    setCurrentPage(() => index);
  };

  if (!arrayRender.length) return null;

  return (
    <S.Container>
      {arrayRender.map((_, i) => (
        <PaginationButton
          pageNumber={i}
          isActive={currentPage === i}
          onClick={onClickPageButton(i)}
        />
      ))}
    </S.Container>
  );
};

export default ClientsSelectPagination;
