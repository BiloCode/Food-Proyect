import { FC } from "react";
import classnames from "classnames";
import { IconType } from "react-icons";
import * as S from "./styles";

type IconColorType = "white" | "black";
type IconProps = {
  Type: IconType;
  color?: IconColorType;
};

const Icon: FC<IconProps> = ({ Type, color }) => (
  <S.Container
    className={classnames({
      white: color === "white",
      black: color === "black",
    })}
  >
    {<Type />}
  </S.Container>
);

Icon.defaultProps = {
  color: "black",
};

export default Icon;
