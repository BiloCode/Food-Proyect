import { FC } from "react";
import * as S from "./styles";

import CircleNumber from "components/atoms/CircleNumber";

type PaginationButtonListProps = {
  pageSelect: number;
  pageNumber: number;
  onClickButton(pageId: number);
};

const PaginationButtonList: FC<PaginationButtonListProps> = ({
  pageSelect,
  pageNumber,
  onClickButton,
}) => {
  const pagesList = new Array(pageNumber).fill("");

  return (
    <S.MainContainer>
      <S.PagesButtonContainer gridCount={pageNumber + 1}>
        {pagesList.map((_, i) => (
          <CircleNumber
            key={i}
            value={i + 1}
            onClick={onClickButton(i)}
            isSelect={i === pageSelect}
          />
        ))}
      </S.PagesButtonContainer>
    </S.MainContainer>
  );
};

export default PaginationButtonList;
