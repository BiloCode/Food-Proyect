import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type TitleSize = "small" | "default";
type TitleProps = {
  size?: TitleSize;
};

const Title: FC<TitleProps> = ({ children, size }) => (
  <S.TextElement
    className={classNames({
      small_size: size === "small",
    })}
  >
    {children}
  </S.TextElement>
);

export default Title;
