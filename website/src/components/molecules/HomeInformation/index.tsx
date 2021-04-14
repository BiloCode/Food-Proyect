import classNames from "classnames";
import HomeTittle from "components/atoms/HomeTittle";
import HomeTittleDescription from "components/atoms/HomeTittleDescription";

import * as S from "./styles";

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
        <HomeTittle color={props.color}>{props.textTittle}</HomeTittle>
      </S.TitleContainer>
      <HomeTittleDescription color={props.color}>
        {props.textDescription}
      </HomeTittleDescription>
    </S.MainContainer>
  );
};

export default HomeInformation;
