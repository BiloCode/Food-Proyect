import * as S from "./styles";

import FoodCard from "components/molecules/FoodCard";
import { FoodModelType } from "application/types/FoodModelType";
import { memo } from "react";

type ListProps = {
  foods: FoodModelType[];
};

const FoodGridList = ({ foods }: ListProps) => (
  <S.FoodListContainer>
    <S.FoodList>
      {foods.map((v) => (
        <FoodCard key={v._id} foodData={v} />
      ))}
    </S.FoodList>
  </S.FoodListContainer>
);

export default memo(FoodGridList);
