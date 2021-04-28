import { FC } from "react";
import classNames from "classnames";
import * as S from "./styles";

import { TextColorType } from "application/types/TextColorType";

type sizeType = "extra_small" | "small" | "medium" | "large";

export type TitleType = {
  size?: sizeType;
  lowercase?: boolean;
  color?: TextColorType;
  letterSpacing?: boolean;
};

const Title: FC<TitleType> = ({
  size,
  color,
  children,
  lowercase,
  letterSpacing,
}) => {
  return (
    <S.Container
      className={classNames({
        lowercase,
        extra_small: size === "extra_small",
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
        white: color === "white",
        letter_spacing: letterSpacing,
        light_black: color === "light-black",
        blue: color === "blue",
      })}
    >
      {children}
    </S.Container>
  );
};

Title.defaultProps = {
  color: "light-black",
};

export default Title;
