import classNames from "classnames";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Description from "components/atoms/Description";

type colorType = "white" | "black";
type orientationType = "right" | "left" | "center";

type HomeInformationType = {
  color: colorType;
  orientation: orientationType;
  textTittle: string;
  textDescription: string;
};

const HomeInformation = (props: HomeInformationType) => {
  return (
    <S.MainContainer
      className={classNames({
        right: props.orientation === "right",
        center: props.orientation === "center",
      })}
    >
      <S.TitleContainer>
        <Title color={props.color}>{props.textTittle}</Title>
      </S.TitleContainer>
      <Description color={props.color}>{props.textDescription}</Description>
    </S.MainContainer>
  );
};

export default HomeInformation;
