import classNames from "classnames";
import * as S from "./styles";

export type BoxColor = "green";
export type TextWithBoxProps = {
  text: string;
  boxColor?: BoxColor;
};

const TextWithBox = ({ boxColor, text }: TextWithBoxProps) => (
  <S.MainContainer>
    <S.BoxElement className={classNames({ green: boxColor === "green" })} />
    <S.TextElement>{text}</S.TextElement>
  </S.MainContainer>
);

export default TextWithBox;
