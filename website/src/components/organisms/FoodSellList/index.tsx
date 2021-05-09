import { FC } from "react";
import * as S from "./styles";

import FoodSellCard from "components/molecules/FoodSellCard";

type FoodSellProps = {
  food: any[];
  pageSelect: number;
};

const FoodSellList: FC<FoodSellProps> = ({ food, pageSelect }) => (
  <S.MainContainer>
    <S.FoodContainer translateX={pageSelect * 100} columns={food.length}>
      {food.map((_, i) => (
        <FoodSellCard key={i} />
      ))}
    </S.FoodContainer>
  </S.MainContainer>
);

export default FoodSellList;
