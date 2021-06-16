import * as S from "./styles";

import Title from "components/atoms/Title";
import Image from "components/atoms/Image";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import EatableCard from "components/atoms/EatableCard";

type FoodProps = {
  image: string;
  title: string;
  price: number;
  description: string;
};

const FoodMenuCard = ({ title, price, description, image }: FoodProps) => (
  <EatableCard
    imageRender={() => (
      <S.ImageContainer>
        <Image imageCover src={image} />
      </S.ImageContainer>
    )}
    textRender={() => (
      <S.InformationContainer>
        <S.TextContainer>
          <Title size="small-medium">{title}</Title>
          <S.PriceText>S/ {price.toFixed(2)}</S.PriceText>
          <Description size="small">{description}</Description>
        </S.TextContainer>
        <Button text="Editar Comida" styles={{ color: "yellow" }} />
      </S.InformationContainer>
    )}
  />
);

export default FoodMenuCard;
