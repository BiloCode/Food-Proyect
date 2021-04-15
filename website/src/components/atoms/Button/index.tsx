import { FC } from "react";
import * as S from "./styles";
import classnames from "classnames";

type ButtonType = "button" | "submit";
type ButtonColorType = "yellow" | "normal";
type ButtonTypeProps = {
  text: string;
  onClick?(): void;
  type?: ButtonType;
  color?: ButtonColorType;
};

const Button: FC<ButtonTypeProps> = ({ text, color, onClick, type }) => (
  <S.Button
    type={type}
    onClick={onClick}
    className={classnames({ yellow: color === "yellow" })}
  >
    {text}
  </S.Button>
);

Button.defaultProps = {
  color: "normal",
  type: "button",
};

export default Button;
