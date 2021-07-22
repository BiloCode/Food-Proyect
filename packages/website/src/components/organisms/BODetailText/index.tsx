import { FC, memo } from "react";
import * as S from "./styles";

import Description from "components/atoms/Description";
import { StarListPuntuaction } from "@food-proyect/shared-components";

import { FoodType } from "@food-proyect/shared-types";
import { Title, Button } from "@food-proyect/shared-components";

type BODetailTextProps = {
  name: string;
  stars: number;
  description: string;
  foodType: FoodType;
};

const BODetailText: FC<BODetailTextProps> = ({
  name,
  stars,
  foodType,
  description,
}) => (
  <S.MainContainer>
    <div>
      <S.TitleContainer>
        <Title>{name}</Title>
        <S.ButtonContainer>
          <Button text={foodType} styles={{ size: "small" }} />
        </S.ButtonContainer>
      </S.TitleContainer>
      <StarListPuntuaction stars={stars} iconSize="small-medium" />
    </div>
    <S.DescriptionContainer>
      <Description size="small">
        {description || "Sin descripcion disponible..."}
      </Description>
    </S.DescriptionContainer>
  </S.MainContainer>
);

export default memo(BODetailText);
