import classnames from "classnames";
import { IconType } from "react-icons";
import * as S from "./styles";

export type IconColorType = "white";
export type IconSizeType = "small" | "medium";
export type IconProps = {
  type: IconType;
  color?: IconColorType;
  size?: IconSizeType;
};

const Icon = ({ type: CustomIcon, color, size }: IconProps) => (
  <S.Container
    className={classnames({
      white: color === "white",
      small: size === "small",
      medium: size === "medium",
    })}
  >
    {<CustomIcon />}
  </S.Container>
);

Icon.defaultProps = {
  color: "black",
};

export default Icon;
