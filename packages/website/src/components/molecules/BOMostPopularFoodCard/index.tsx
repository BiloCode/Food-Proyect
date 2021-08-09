import { FC, memo } from "react";
import * as S from "./styles";

import Description from "components/atoms/Description";

import { MenuType } from "@food-proyect/shared-types";
import { Image, Title, Button } from "@food-proyect/shared-components";

type MostPopularCardProps = {
  onClick?(): void;
  sellMenu: MenuType;
};

const BOMostPopularFoodCard: FC<MostPopularCardProps> = ({
  onClick,
  sellMenu,
}) => (
  <S.MainContainer>
    <Title color="blue" size="small-medium">
      {sellMenu.title}
    </Title>
    <S.ImageContainer>
      <Image imageCover src={sellMenu.foods[0].image} />
    </S.ImageContainer>
    <Description size="small">{sellMenu.description}</Description>
    <S.MoneyContainer>
      <Title color="blue">
        S/{" "}
        {sellMenu.foods.reduce((prev, next) => prev + next.price, 0).toFixed(2)}
      </Title>
    </S.MoneyContainer>
    <Button
      onClick={onClick}
      text="Ver menu Completo"
      styles={{ color: "yellow" }}
    />
  </S.MainContainer>
);

export default memo(BOMostPopularFoodCard);
