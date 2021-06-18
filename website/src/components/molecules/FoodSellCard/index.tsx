import { memo } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import Image from "components/atoms/Image";

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
      <Title color="black" size="small">
        {name}
      </Title>
      <S.Money>S/ {price.toFixed(2)}</S.Money>
      <S.DescriptionContainer>
        <Description size="small">{description}</Description>
      </S.DescriptionContainer>
    </S.TextContainer>
  </S.MainContainer>
);

export default memo(FoodSellCard);
