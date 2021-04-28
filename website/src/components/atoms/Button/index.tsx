import { FC } from "react";
import * as S from "./styles";
import classnames from "classnames";

import Spinner from "../Spinner";

type ButtonType = "button" | "submit";
type ButtonColorType = "yellow" | "red" | "normal";
type ButtonSizeType = "small" | "normal" | "big";
type ButtonTypeProps = {
  text: string;
  onClick?(): void;
  isLoading?: boolean;
  type?: ButtonType;
  styles?: {
    size?: ButtonSizeType;
    color?: ButtonColorType;
  };
};

const Button: FC<ButtonTypeProps> = ({
  text,
  type,
  styles,
  onClick,
  isLoading,
}) => (
  <S.ButtonContainer
    type={type}
    onClick={onClick}
    disabled={isLoading}
    className={classnames({
      big: styles.size === "big",
      small: styles.size === "small",
      yellow: styles.color === "yellow",
      red: styles.color === "red",
    })}
  >
    {!isLoading ? (
      text
    ) : (
      <S.ButtonContainerSpinner>
        <Spinner size="small" color="white" />
      </S.ButtonContainerSpinner>
    )}
  </S.ButtonContainer>
);

Button.defaultProps = {
  type: "button",
  styles: {
    size: "normal",
    color: "normal",
  },
};

export default Button;
