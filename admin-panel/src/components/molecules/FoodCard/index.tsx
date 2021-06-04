import * as S from "./styles";

import Title from "components/atoms/Title";
import Image from "components/atoms/Image";
import Button from "components/atoms/Button";
import RoundedText from "components/atoms/RoundedText";
import EatableCard from "components/atoms/EatableCard";

import { FoodModelType } from "application/types/FoodModelType";
import DateFormatting from "application/utils/DateFormatting";

type FoodCardProps = {
  foodData: FoodModelType;
  select?: boolean;
};

const FoodCard = ({ foodData, select }: FoodCardProps) => (
  <S.MainContainer>
    <EatableCard
      imageRender={() => (
        <S.ImageContainer>
          <Image imageCover src={foodData.image.url} />
          <S.ImageFloatText>
            <RoundedText bgColor="red">
              S/ {foodData.price.toFixed(2)}
            </RoundedText>
          </S.ImageFloatText>
        </S.ImageContainer>
      )}
      textRender={() => (
        <S.TextContent>
          <S.TextContainer>
            <Title size="small-medium" color="light">
              {foodData.name}
            </Title>
            <S.Description>
              {`Ultima edicion ${DateFormatting.applyFormat(
                foodData.createdAt.toDate()
              )}`}
            </S.Description>
          </S.TextContainer>
          <Button text="Editar Comestible" styles={{ color: "yellow" }} />
        </S.TextContent>
      )}
    />
    {select && <S.ContainerDisabled />}
  </S.MainContainer>
);

export default FoodCard;
