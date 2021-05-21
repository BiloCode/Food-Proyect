import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type ColorType = "white";

type ButtonRoundedProps = {
  text: string;
  bgColor: ColorType;
  uppercase?: boolean;
};

const ButtonRounded: FC<ButtonRoundedProps> = ({
  bgColor,
  uppercase,
  children,
}) => {
  return (
    <S.Container
      className={classNames({
        uppercase: uppercase,
        white: bgColor === "white",
      })}
    >
      {children}
    </S.Container>
  );
};

export default ButtonRounded;
