import classNames from "classnames";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import { TitleWithDescriptionType } from "./types";

const TitleWithDescription = (props: TitleWithDescriptionType) => {
  return (
    <S.MainContainer
      className={classNames({
        right: props.orientation === "right",
        center: props.orientation === "center",
      })}
    >
      <S.TitleContainer>
        <Title color={props.tittle.color} size={props.tittle.size}>
          {props.textTittle}
        </Title>
      </S.TitleContainer>
      <Description color={props.description.color}>
        {props.textDescription}
      </Description>
    </S.MainContainer>
  );
};

export default TitleWithDescription;
