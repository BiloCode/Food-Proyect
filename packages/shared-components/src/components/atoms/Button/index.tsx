import { FC } from "react";
import * as S from "./styles";
import classnames from "classnames";

import Spinner from "../Spinner";

type ButtonType = "button" | "submit";
type ButtonColorType = "yellow" | "blue";
type ButtonSizeType = "small" | "normal" | "big" | "medium";
type ButtonTypeProps = {
  type?: ButtonType;
  text: string;
  onClick?(): void;
  ghost?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
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
  disabled,
  isLoading,
  children,
  ghost,
}) => (
  <S.ButtonContainer
    type={type}
    onClick={onClick}
    disabled={isLoading || disabled}
    className={classnames({
      ghost,
      disabled,
      big: styles?.size === "big",
      small: styles?.size === "small",
      medium: styles?.size === "medium",
      yellow: styles?.color === "yellow",
      blue: styles?.color === "blue",
    })}
  >
    {!isLoading ? (
      text
    ) : (
      <S.ButtonContainerSpinner>
        <Spinner size="small" color="white" />
      </S.ButtonContainerSpinner>
    )}
    {children}
  </S.ButtonContainer>
);

Button.defaultProps = {
  type: "button",
  styles: {},
};

export default Button;
