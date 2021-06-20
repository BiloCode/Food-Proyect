import { useState } from "react";
import * as S from "./styles";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Icon from "components/atoms/Icon";
import Title from "components/atoms/Title";
import Image from "components/atoms/Image";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import EatableCard from "components/atoms/EatableCard";

type FoodProps = {
  images: string[];
  title: string;
  price: number;
  description: string;
  onClickButton(): void;
};

const FoodMenuCard = ({
  title,
  price,
  description,
  images,
  onClickButton,
}: FoodProps) => {
  const [index, setIndex] = useState<number>(0);

  const changeIndex = (index: number) => () => {
    setIndex((oldIndex) => {
      const new_index = oldIndex + index;

      const limiterToZero = Math.max(new_index, 0);
      const limiterToImageSize = Math.min(limiterToZero, images.length - 1);

      return limiterToImageSize;
    });
  };

  return (
    <EatableCard
      imageRender={() => (
        <S.ImageContainer>
          <S.ImageList imageIndex={index} columns={images.length}>
            {images.map((v) => (
              <Image imageCover src={v} />
            ))}
          </S.ImageList>
          {index < images.length - 1 && (
            <S.IconContainer className="right" onClick={changeIndex(1)}>
              <Icon size="medium" color="white" type={FaChevronRight} />
            </S.IconContainer>
          )}
          {index > 0 && (
            <S.IconContainer className="left" onClick={changeIndex(-1)}>
              <Icon size="medium" color="white" type={FaChevronLeft} />
            </S.IconContainer>
          )}
        </S.ImageContainer>
      )}
      textRender={() => (
        <S.InformationContainer>
          <S.TextContainer>
            <Title size="small-medium">{title}</Title>
            <S.PriceText>S/ {price.toFixed(2)}</S.PriceText>
            <Description size="small">{description}</Description>
          </S.TextContainer>
          <Button
            text="Editar Comida"
            onClick={onClickButton}
            styles={{ color: "yellow" }}
          />
        </S.InformationContainer>
      )}
    />
  );
};

export default FoodMenuCard;
