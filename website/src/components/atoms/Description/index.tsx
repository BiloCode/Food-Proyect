import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";
import { TextColorType } from "application/types/TextColorType";

type sizeType = "extra_small" | "small" | "medium" | "large";

export type DescriptionType = {
  color?: TextColorType;
  size?: sizeType;
};

const Description: FC<DescriptionType> = ({ children, color, size }) => {
  return (
    <S.Container
      className={classNames({
        white: color === "white",
        extra_small: size === "extra_small",
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
      })}
    >
      {children}
    </S.Container>
  );
};

export default Description;
