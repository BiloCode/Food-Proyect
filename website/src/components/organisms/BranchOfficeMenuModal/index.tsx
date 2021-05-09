import { FC, useState } from "react";
import * as S from "./styles";

import { FaTimes } from "react-icons/fa";

import Title from "components/atoms/Title";
import FoodSellList from "../FoodSellList";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import PaginationButtonList from "components/molecules/PaginationButtonList";
import Icon from "components/atoms/Icon";

const fakeList = new Array(30).fill("");

type MenuModalProps = {
  onClose(): void;
};

const BranchOfficeMenuModal: FC<MenuModalProps> = ({ onClose }) => {
  const [pageSelect, setPageSelect] = useState<number>(0);
  const [cardsInView, setCardsInView] = useState<number>(3);

  const changePage = (pageNumber: number) => () => {
    setPageSelect(() => pageNumber);
  };

  return (
    <Portals>
      <DarkScreen>
        <S.MainContainer>
          <S.ModalMenuContainer>
            <S.LimiterContainer>
              <S.TitleContainer>
                <Title color="black" size="medium" letterSpacing>
                  Nuestro Menu del Dia
                </Title>
                <S.IconContainer onClick={onClose}>
                  <Icon color="blue" Type={FaTimes} />
                </S.IconContainer>
              </S.TitleContainer>
              <FoodSellList pageSelect={pageSelect} food={fakeList} />
              <PaginationButtonList
                pageSelect={pageSelect}
                onClickButton={changePage}
                pageNumber={Math.ceil(fakeList.length / cardsInView)}
              />
            </S.LimiterContainer>
          </S.ModalMenuContainer>
        </S.MainContainer>
      </DarkScreen>
    </Portals>
  );
};

export default BranchOfficeMenuModal;
