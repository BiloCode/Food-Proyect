import classNames from "classnames";
import * as S from "./styles";

import { Title } from "@food-proyect/shared-components";
import Description from "components/atoms/Description";

import { TextColorType } from "application/types/TextColorType";

type OrientationType = "right" | "left" | "center";
type HomeTitleWithDescriptionProps = {
  title: string;
  description: string;
  color?: TextColorType;
  orientation?: OrientationType;
};

const HomeTitleWithDescription = ({
  title,
  color,
  orientation,
  description,
}: HomeTitleWithDescriptionProps) => {
  return (
    <S.MainContainer
      className={classNames({
        right: orientation === "right",
        center: orientation === "center",
      })}
    >
      <S.TitleContainer>
        <Title>{title}</Title>
      </S.TitleContainer>
      <S.DescriptionContainer>
        <Description color={color} size="medium">
          {description}
        </Description>
      </S.DescriptionContainer>
    </S.MainContainer>
  );
};

export default HomeTitleWithDescription;
