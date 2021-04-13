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
    <S.HomeInformation
      className={classNames({
        black: props.color === "black",
        white: props.color === "white",
        right: props.orientation === "right",
        center: props.orientation === "center",
      })}
    >
      <S.HomeInformationTittle>
        <HomeTittle>{props.textTittle}</HomeTittle>
      </S.HomeInformationTittle>
      <HomeTittleDescription>{props.textDescription}</HomeTittleDescription>
    </S.HomeInformation>
  );
};

export default HomeInformation;
