import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";
import { DescriptionType } from "./types";

const Description: FC<DescriptionType> = ({ children, color }) => {
  return (
    <S.Container
      className={classNames({
        white: color === "white",
      })}
    >
      {children}
    </S.Container>
  );
};

export default Description;
