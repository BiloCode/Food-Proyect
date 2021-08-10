import { FC } from "react";
import * as S from "./styles";

import classNames from "classnames";

type TProps = {
  size?: "big" | "small";
};

const Paragraph: FC<TProps> = ({ children, size }) => (
  <S.ParagraphContent
    className={classNames({
      big: size === "big",
      small: size === "small",
    })}
  >
    {children}
  </S.ParagraphContent>
);

export default Paragraph;
