import classnames from "classnames";
import { IconType } from "react-icons";
import * as S from "./styles";

export type IconColorType = "white" | "yellow" | "gray";
export type IconSizeType = "small" | "medium" | "big";
export type IconProps = {
  type: IconType;
  color?: IconColorType;
  size?: IconSizeType;
};

const Icon = ({ type: CustomIcon, color, size }: IconProps) => (
  <S.Container
    className={classnames({
      big: size === "big",
      small: size === "small",
      medium: size === "medium",
      white: color === "white",
      yellow: color === "yellow",
      gray: color === "gray",
    })}
  >
    {<CustomIcon />}
  </S.Container>
);

Icon.defaultProps = {
  color: "black",
};

export default Icon;
