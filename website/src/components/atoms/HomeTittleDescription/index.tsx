import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type colorType = "white" | "black";

type HomeTittleType = {
  color: colorType;
};

const HomeTittleDescription: FC<HomeTittleType> = ({ children, color }) => {
  return (
    <S.HomeTittleDescription
      className={classNames({
        white: color === "white",
      })}
    >
      {children}
    </S.HomeTittleDescription>
  );
};

export default HomeTittleDescription;
