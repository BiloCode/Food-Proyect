import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type sizeType = "extra_small" | "small" | "medium" | "large";

type TextColorType = "white" | "black" | "gray" | "black-light";

type boldType = "regular" | "semi-bold" | "bold";

type alignType = "right" | "left" | "center";

export type SpanType = {
  color?: TextColorType;
  size?: sizeType;
  bold?: boldType;
  uppercase?: boolean;
  align?: alignType;
};

const Span: FC<SpanType> = ({
  children,
  color,
  size,
  bold,
  uppercase,
  align,
}) => {
  return (
    <S.Container
      className={classNames({
        uppercase: uppercase,
        white: color === "white",
        gray: color === "gray",
        black_light: color === "black-light",
        extra_small: size === "extra_small",
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
        semi_bold: bold === "semi-bold",
        bold: bold === "bold",
        right: align === "right",
        center: align === "center",
      })}
    >
      {children}
    </S.Container>
  );
};

export default Span;
