import classNames from "classnames";
import * as S from "./styles";

type colorType = "gray" | "blue";

type ButtonRoundedProps = {
  text: string;
  onClick?(): void;
  color?: colorType;
};

const ButtonRounded = ({ text, color, onClick }: ButtonRoundedProps) => {
  return (
    <S.Container
      onClick={onClick}
      className={classNames({
        blue: color === "blue",
      })}
    >
      {text}
    </S.Container>
  );
};

export default ButtonRounded;
