import classnames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type SpinnerSizeType = "small" | "big" | "extra-big";
type SpinnerColorType = "white" | "blue";
type SpinnerProps = {
  size?: SpinnerSizeType;
  color?: SpinnerColorType;
};

const Spinner: FC<SpinnerProps> = ({ size, color }) => (
  <S.SpinnerElement
    data-testid="spinner"
    className={classnames({
      blue: color === "blue",
      white: color === "white",
      big: size === "big",
      extra_big: size === "extra-big",
      small: size === "small",
    })}
  ></S.SpinnerElement>
);

Spinner.defaultProps = {
  color: "blue",
};

export default Spinner;
