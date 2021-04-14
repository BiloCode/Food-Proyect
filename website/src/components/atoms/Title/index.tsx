import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";
import { TitleType } from "./types";

const Title: FC<TitleType> = ({ children, color, size }) => {
  return (
    <S.Title
      className={classNames({
        white: color === "white",
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
      })}
    >
      {children}
    </S.Title>
  );
};

export default Title;
