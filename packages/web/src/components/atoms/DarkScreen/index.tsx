import { FC } from "react";
import * as S from "./styles";

type DarkScreenProps = {};

const DarkScreen: FC<DarkScreenProps> = ({ children }) => (
  <S.DarkScreenContainer>{children}</S.DarkScreenContainer>
);

export default DarkScreen;
