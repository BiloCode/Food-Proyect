import { memo } from "react";
import * as S from "./styles";

import Description from "components/atoms/Description";
import { Image, Title } from "@food-proyect/shared-components";

type FoodSellCardProps = {
  name: string;
  price: number;
  images: string[];
  description: string;
};

const FoodSellCard = ({
  name,
  price,
  images,
  description,
}: FoodSellCardProps) => (
  <S.MainContainer>
    <S.ImageContainer>
      <Image src={images[0]} imageCover />
    </S.ImageContainer>
    <S.TextContainer>
      <Title size="small">{name}</Title>
      <S.Money>S/ {price.toFixed(2)}</S.Money>
      <S.DescriptionContainer>
        <Description size="small">{description}</Description>
      </S.DescriptionContainer>
    </S.TextContainer>
  </S.MainContainer>
);

export default memo(FoodSellCard);
