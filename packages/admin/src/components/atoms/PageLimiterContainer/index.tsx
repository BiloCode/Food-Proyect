import { FC } from "react";
import * as S from "./styles";

const PageLimiterContainer: FC = ({ children }) => (
  <S.MainContainer>{children}</S.MainContainer>
);

export default PageLimiterContainer;
