import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import PaginationButtonList from "components/molecules/PaginationButtonList";

const fakeList = new Array(120).fill("");
const pagesListNumber = 4;

const BranchOfficeDetailMenu: FC<RouteComponentProps> = () => (
  <Portals>
    <DarkScreen>
      <S.MainContainer>
        <S.ModalMenuContainer>
          <S.LimiterContainer>
            <Title color="black" size="medium" letterSpacing>
              Nuestro Menu del Dia
            </Title>
            <div></div>
            <PaginationButtonList
              pageSelect={6}
              maxPagesRender={5}
              pageNumber={Math.ceil(fakeList.length / pagesListNumber)}
            />
          </S.LimiterContainer>
        </S.ModalMenuContainer>
      </S.MainContainer>
    </DarkScreen>
  </Portals>
);

export default BranchOfficeDetailMenu;
