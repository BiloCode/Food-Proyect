import classNames from "classnames";
import * as S from "./styles";

type PaginationButtonProps = {
  onClick(pageInit: number, pageFinish: number): void;
  page: number;
  actualPage: number;
  clientsForPage: number;
  setterActualPage?(page: number): void;
};

const PaginationButton = ({
  onClick,
  page,
  actualPage,
  clientsForPage,
  setterActualPage,
}: PaginationButtonProps) => {
  return (
    <S.Container
      onClick={() => {
        onClick(
          page * clientsForPage + 1,
          page * clientsForPage + clientsForPage
        );
        setterActualPage(page + 1);
      }}
      className={classNames({ active: actualPage === page + 1 })}
    >
      {page + 1}
    </S.Container>
  );
};

export default PaginationButton;
