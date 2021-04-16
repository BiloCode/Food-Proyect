import { FC } from "react";
import classnames from "classnames";
import { IconType } from "react-icons";
import * as S from "./styles";

type IconColorType = "white" | "black";
type IconSizeType = "small" | "medium" | "large";
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
      small: size === "small",
      medium: size === "medium",
    })}
  >
    {<Type />}
  </S.Container>
);

Icon.defaultProps = {
  color: "black",
};

export default Icon;
