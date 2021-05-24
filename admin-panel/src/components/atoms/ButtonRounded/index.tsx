import * as S from "./styles";

type ButtonRoundedProps = {
  text: string;
};

const ButtonRounded = ({ text }: ButtonRoundedProps) => {
  return <S.Container>{text}</S.Container>;
};

export default ButtonRounded;
