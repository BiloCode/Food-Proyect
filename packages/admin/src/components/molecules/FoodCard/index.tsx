import * as S from "./styles";

import Title from "components/atoms/Title";
import Image from "components/atoms/Image";
import Button from "components/atoms/Button";
import RoundedText from "components/atoms/RoundedText";
import EatableCard from "components/atoms/EatableCard";

import { Food } from "@food/shared-types";
import { DateFormatting } from "@food/shared-functions";

type FoodCardProps = {
  foodData: Food;
  isSelect?: boolean;
  selectable?: boolean;
  onClickButton(): void;
  onClickSelect(): void;
};

const FoodCard = ({
  isSelect,
  foodData,
  selectable,
  onClickButton,
  onClickSelect,
}: FoodCardProps) => (
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
          <Button
            disabled={isSelect}
            onClick={onClickButton}
            styles={{ color: selectable ? "blue" : "yellow" }}
            text={selectable ? "Seleccionar" : "Editar Comestible"}
          />
        </S.TextContent>
      )}
    />
    {isSelect && (
      <S.ContainerDisabled>
        <S.ButtonContainer>
          <Button
            text="Quitar"
            onClick={onClickSelect}
            styles={{ color: "red" }}
          />
        </S.ButtonContainer>
      </S.ContainerDisabled>
    )}
  </S.MainContainer>
);

export default FoodCard;
