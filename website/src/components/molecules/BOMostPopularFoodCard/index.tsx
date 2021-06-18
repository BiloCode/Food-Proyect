import { FC, memo } from "react";
import * as S from "./styles";

import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import Button from "components/atoms/Button";

import { MenuType } from "application/types/BranchOfficeModelType";

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
      <Title size="medium" color="blue">
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
