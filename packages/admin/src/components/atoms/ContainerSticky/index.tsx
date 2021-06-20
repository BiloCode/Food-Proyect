import { FC } from "react";
import * as S from "./styles";

const ContainerSticky: FC = ({ children }) => (
  <S.MainContainer>{children}</S.MainContainer>
);

export default ContainerSticky;
