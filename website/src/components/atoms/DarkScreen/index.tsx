import { FC } from "react";
import * as S from "./styles";

const DarkScreen: FC = ({ children }) => (
  <S.DarkScreenContainer>{children}</S.DarkScreenContainer>
);

export default DarkScreen;
