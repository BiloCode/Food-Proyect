import classnames from "classnames";
import { IconType } from "react-icons";
import * as S from "./styles";

export type IconColorType = "white" | "yellow" | "gray" | "blue";
export type IconSizeType =
  | "small"
  | "small-medium"
  | "medium"
  | "big"
  | "extra-big";
export type IconProps = {
  type: IconType;
  color?: IconColorType;
  size?: IconSizeType;
};

const Icon = ({ type: CustomIcon, color, size }: IconProps) => (
  <S.Container
    className={classnames({
      extra_big: size === "extra-big",
      big: size === "big",
      small: size === "small",
      medium: size === "medium",
      small_medium: size === "small-medium",
      white: color === "white",
      yellow: color === "yellow",
      gray: color === "gray",
      blue: color === "blue",
    })}
  >
    {<CustomIcon />}
  </S.Container>
);

Icon.defaultProps = {
  color: "black",
};

export default Icon;
