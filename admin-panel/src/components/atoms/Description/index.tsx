import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type sizeType = "extra_small" | "small" | "medium" | "large";

type TextColorType = "white" | "black" | "gray";

type boldType = "regular" | "semi-bold" | "bold";

export type DescriptionType = {
  color?: TextColorType;
  size?: sizeType;
  bold?: boldType;
  uppercase?: boolean;
};

const Description: FC<DescriptionType> = ({
  children,
  color,
  size,
  bold,
  uppercase,
}) => {
  return (
    <S.Container
      className={classNames({
        white: color === "white",
        gray: color === "gray",
        extra_small: size === "extra_small",
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
        semi_bold: bold === "semi-bold",
        bold: bold === "bold",
        uppercase: uppercase,
      })}
    >
      {children}
    </S.Container>
  );
};

export default Description;
