import { FC } from "react";
import * as S from "./styles";
import classnames from "classnames";

type ButtonColorType = "yellow" | "normal";
type ButtonType = {
  text: string;
  color?: ButtonColorType;
};

const Button: FC<ButtonType> = ({ text, color }) => (
  <S.Button className={classnames({ yellow: color === "yellow" })}>
    {text}
  </S.Button>
);

Button.defaultProps = {
  color: "normal",
};

export default Button;
