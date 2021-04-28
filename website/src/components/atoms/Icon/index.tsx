import { FC } from "react";
import classnames from "classnames";
import { IconType } from "react-icons";
import * as S from "./styles";

type IconColorType = "white" | "black" | "blue" | "yellow" | "gray";
type IconSizeType = "small" | "small-medium" | "medium" | "large";
type IconProps = {
  Type: IconType;
  color?: IconColorType;
  size?: IconSizeType;
};

const Icon: FC<IconProps> = ({ Type, color, size }) => (
  <S.Container
    className={classnames({
      white: color === "white",
      black: color === "black",
      blue: color === "blue",
      gray: color === "gray",
      small: size === "small",
      small_medium: size === "small-medium",
      medium: size === "medium",
      yellow: color === "yellow",
    })}
  >
    {<Type />}
  </S.Container>
);

Icon.defaultProps = {
  color: "black",
};

export default Icon;
