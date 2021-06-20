import { FC } from "react";
import * as S from "./styles";

import { MenuType } from "@food-proyect/shared-types";

import FoodSellCard from "components/molecules/FoodSellCard";

type FoodSellProps = {
  listMenu: MenuType[];
  pageSelect: number;
};

const FoodSellList: FC<FoodSellProps> = ({ listMenu, pageSelect }) => (
  <S.MainContainer>
    <S.FoodContainer translateX={pageSelect * 100} columns={listMenu.length}>
      {listMenu.map((v) => (
        <FoodSellCard
          key={v._id}
          name={v.title}
          description={v.description}
          images={v.foods.map((v) => v.image)}
          price={v.foods.reduce((prev, next) => prev + next.price, 0)}
        />
      ))}
    </S.FoodContainer>
  </S.MainContainer>
);

export default FoodSellList;
