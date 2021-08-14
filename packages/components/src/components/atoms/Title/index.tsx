import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type TColor = "blue" | "default" | "white";
type TWeight = "e-bold" | "black";
type TSize = "small" | "medium" | "m-big" | "big" | "e-big";

type TitleProps = {
  size?: TSize;
  color?: TColor;
  weight?: TWeight;
  lowercase?: boolean;
};

const Title: FC<TitleProps> = ({
  children,
  size,
  color,
  lowercase,
  weight,
}) => (
  <S.TextElement
    className={classNames({
      lowercase,
      blue: color === "blue",
      white: color === "white",
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
