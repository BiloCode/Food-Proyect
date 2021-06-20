import { FC } from "react";
import classNames from "classnames";
import * as S from "./styles";

type ColorBackground = "yellow" | "red" | "green" | "blue";
type sizeType = "extra_small";
export type RoundedTextProps = {
  bgColor?: ColorBackground;
  size?: sizeType;
};

const RoundedText: FC<RoundedTextProps> = ({ children, bgColor, size }) => (
  <S.TextContainer
    className={classNames({
      red: bgColor === "red",
      yellow: bgColor === "yellow",
      green: bgColor === "green",
      blue: bgColor === "blue",
      extra_small: size === "extra_small",
    })}
  >
    {children}
  </S.TextContainer>
);

export default RoundedText;
