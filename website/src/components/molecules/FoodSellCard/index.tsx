import faker from "faker";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import Image from "components/atoms/Image";
import { memo } from "react";

const FoodSellCard = () => (
  <S.MainContainer>
    <S.ImageContainer>
      <Image src={faker.random.image()} imageCover />
    </S.ImageContainer>
    <S.TextContainer>
      <Title color="black" size="small">
        Combo Papas + Hamburgesa
      </Title>
      <S.Money>S/ 32.20</S.Money>
      <S.DescriptionContainer>
        <Description size="small">{faker.lorem.words(15)}</Description>
      </S.DescriptionContainer>
    </S.TextContainer>
  </S.MainContainer>
);

export default memo(FoodSellCard);
