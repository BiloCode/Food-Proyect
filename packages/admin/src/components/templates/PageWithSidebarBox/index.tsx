import { FC } from "react";
import * as S from "./styles";

import Sidebar from "components/organisms/Sidebar";

const PageWithSidebarBox: FC = ({ children }) => (
  <S.MainContainer>
    <Sidebar />
    <S.ChildrenContainer>{children}</S.ChildrenContainer>
  </S.MainContainer>
);

export default PageWithSidebarBox;
