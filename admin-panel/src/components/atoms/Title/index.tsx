import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type TitleSize = "small" | "small-medium" | "default";
type TitleColor = "light";
type TitleProps = {
  size?: TitleSize;
  color?: TitleColor;
};

const Title: FC<TitleProps> = ({ children, size, color }) => (
  <S.TextElement
    className={classNames({
      small_size: size === "small",
      c_black_ligth: color === "light",
      small_medium: size === "small-medium",
    })}
  >
    {children}
  </S.TextElement>
);

export default Title;
