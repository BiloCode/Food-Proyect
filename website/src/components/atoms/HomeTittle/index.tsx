import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type colorType = "white" | "black";

type HomeTittleType = {
  color: colorType;
};

const HomeTittle: FC<HomeTittleType> = ({ children, color }) => {
  return (
    <S.HomeTittle
      className={classNames({
        white: color === "white",
      })}
    >
      {children}
    </S.HomeTittle>
  );
};

export default HomeTittle;
