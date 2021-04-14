import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type colorType = "white" | "black";

type HomeTittleType = {
  color: colorType;
};

const Description: FC<HomeTittleType> = ({ children, color }) => {
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
