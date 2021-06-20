import classNames from "classnames";
import * as S from "./styles";

type ButtonProps = {
  pageNumber: number;
  onClick(): void;
  isActive: boolean;
};

const PaginationButton = ({ onClick, isActive, pageNumber }: ButtonProps) => (
  <S.Container onClick={onClick} className={classNames({ active: isActive })}>
    {pageNumber + 1}
  </S.Container>
);

export default PaginationButton;
