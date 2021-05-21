import { FC } from "react";
import classNames from "classnames";
import * as S from "./styles";

type ColorBackground = "yellow" | "red" | "green";
export type RoundedTextProps = {
  bgColor?: ColorBackground;
};

const RoundedText: FC<RoundedTextProps> = ({ children, bgColor }) => (
  <S.TextContainer
    className={classNames({
      red: bgColor === "red",
      yellow: bgColor === "yellow",
      green: bgColor === "green",
    })}
  >
    {children}
  </S.TextContainer>
);

export default RoundedText;
