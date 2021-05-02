import { memo } from "react";
import faker from "faker";
import * as S from "./styles";

import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import Button from "components/atoms/Button";

const BOMostPopularFoodCard = () => (
  <S.MainContainer>
    <Title color="blue" size="small-medium">
      Combo Vegano para dos
    </Title>
    <S.ImageContainer>
      <Image
        imageCover
        src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/d/u/duo-queso-tocino_1.jpg"
      />
    </S.ImageContainer>
    <Description size="small">{faker.lorem.words(20)}</Description>
    <S.MoneyContainer>
      <Title size="medium" color="blue">
        S/ 16.00
      </Title>
    </S.MoneyContainer>
    <Button text="Ver menu Completo" styles={{ color: "yellow" }} />
  </S.MainContainer>
);

export default memo(BOMostPopularFoodCard);
