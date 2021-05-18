import { FC } from "react";
import * as S from "./styles";

const RoundedText: FC = ({ children }) => (
  <S.TextContainer>{children}</S.TextContainer>
);

export default RoundedText;
