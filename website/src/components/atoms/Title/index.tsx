import { FC } from "react";
import classNames from "classnames";
import * as S from "./styles";

import { TextColorType } from "application/types/TextColorType";

type sizeType = "small" | "medium" | "large";

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
    <S.Title
      className={classNames({
        lowercase,
        large: size === "large",
        small: size === "small",
        medium: size === "medium",
        white: color === "white",
        letter_spacing: letterSpacing,
        light_black: color === "light-black",
      })}
    >
      {children}
    </S.Title>
  );
};

Title.defaultProps = {
  color: "light-black",
};

export default Title;
