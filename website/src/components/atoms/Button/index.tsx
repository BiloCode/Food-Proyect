import { FC } from "react";
import * as S from "./styles";
import classnames from "classnames";

type ButtonType = "button" | "submit";
type ButtonColorType = "yellow" | "normal";
type ButtonSizeType = "normal" | "big";
type ButtonTypeProps = {
  text: string;
  onClick?(): void;
  type?: ButtonType;
  size?: ButtonSizeType;
  color?: ButtonColorType;
};

const Button: FC<ButtonTypeProps> = ({ text, color, onClick, type, size }) => (
  <S.ButtonContainer
    type={type}
    onClick={onClick}
    className={classnames({ yellow: color === "yellow", big: size === "big" })}
  >
    {text}
  </S.ButtonContainer>
);

Button.defaultProps = {
  size: "normal",
  type: "button",
  color: "normal",
};

export default Button;
