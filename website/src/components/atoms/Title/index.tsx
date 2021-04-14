import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type colorType = "white" | "black";
type TitleType = {
  color: colorType;
};

const Title: FC<TitleType> = ({ children, color }) => {
  return (
    <S.Title
      className={classNames({
        white: color === "white",
      })}
    >
      {children}
    </S.Title>
  );
};

export default Title;
