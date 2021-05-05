import { FC } from "react";
import * as S from "./styles";

import CircleNumber from "components/atoms/CircleNumber";

type PaginationButtonListProps = {
  pageSelect: number;
  pageNumber: number;
  maxPagesRender: number;
  onClickButton?(): void;
};

const PaginationButtonList: FC<PaginationButtonListProps> = ({
  pageSelect,
  pageNumber,
  onClickButton,
  maxPagesRender,
}) => {
  const pagesList = new Array(maxPagesRender).fill("");

  return (
    <S.MainContainer>
      <S.PagesButtonContainer gridCount={maxPagesRender + 1}>
        {pagesList.map((_, i) => (
          <CircleNumber
            key={i}
            onClick={onClickButton}
            isSelect={i === pageSelect}
            value={i + 1}
          />
        ))}
        <CircleNumber value="..." />
      </S.PagesButtonContainer>
    </S.MainContainer>
  );
};

export default PaginationButtonList;
