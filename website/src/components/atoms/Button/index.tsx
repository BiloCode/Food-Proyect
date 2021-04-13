import { FC } from "react";
import * as S from "./styles";
import classnames from "classnames";

type ButtonColorType = "yellow" | "normal";
type ButtonType = {
  text: string;
  color?: ButtonColorType;
  onClick?(): void;
};

const Button: FC<ButtonType> = ({ text, color, onClick }) => (
  <S.Button
    onClick={onClick}
    className={classnames({ yellow: color === "yellow" })}
  >
    {text}
  </S.Button>
);

Button.defaultProps = {
  color: "normal",
};

export default Button;
