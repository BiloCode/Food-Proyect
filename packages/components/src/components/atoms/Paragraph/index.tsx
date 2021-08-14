import { FC } from "react";
import * as S from "./styles";

import classNames from "classnames";

type TProps = {
  size?: "big" | "small" | "s-medium";
  color?: "white" | "default";
  regular?: boolean;
};

const Paragraph: FC<TProps> = ({ children, size, color, regular }) => (
  <S.ParagraphContent
    className={classNames({
      regular,
      big: size === "big",
      small: size === "small",
      white: color === "white",
      s_medium: size === "s-medium",
    })}
  >
    {children}
  </S.ParagraphContent>
);

export default Paragraph;
