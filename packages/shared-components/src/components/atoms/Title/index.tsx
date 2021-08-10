import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type TColor = "blue" | "default";
type TWeight = "e-bold" | "black";
type TSize = "small" | "medium" | "m-big" | "big" | "e-big";

type TitleProps = {
  size?: TSize;
  color?: TColor;
  weight?: TWeight;
  uppercase?: boolean;
};

const Title: FC<TitleProps> = ({
  children,
  size,
  color,
  uppercase,
  weight,
}) => (
  <S.TextElement
    className={classNames({
      uppercase,
      blue: color === "blue",
      e_bold: weight === "e-bold",
      black: weight === "black",
      small: size === "small",
      medium: size === "medium",
      m_big: size === "m-big",
      big: size === "big",
      e_big: size === "e-big",
    })}
  >
    {children}
  </S.TextElement>
);

export default Title;
