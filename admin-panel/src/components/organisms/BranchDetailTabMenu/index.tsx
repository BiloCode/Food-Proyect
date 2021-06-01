import * as S from "./styles";

import { useState } from "react";

import BranchMenu from "components/templates/BranchMenu";
import BranchInformation from "components/organisms/BranchInformation";
import BranchComments from "components/templates/BranchComments";
import BranchOfficeTabOption from "components/atoms/BranchOfficeTabOption";
import BranchOfficeTabOptionMenu from "components/molecules/BranchOfficeTabOptionMenu";

const tabPages = ["Detalles", "Puntuaciones", "Menu"];

const BranchDetailTabMenu = () => {
  const [pageSelect, setPageSelect] = useState<number>(0);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const componentSelector = (index: number) => {
    const component = {
      0: <BranchInformation />,
      1: <BranchComments />,
      2: <BranchMenu />,
    };

    return component[index];
  };

  const changePage = (index: number) => () => {
    setPageSelect(index);
    setToggleMenu(false);
  };

  const changePageToggle = (index: number) => () => {
    setPageSelect(index);
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <S.TabOptionContainer>
        {tabPages.map((v, i) => {
          if (i === 2) {
            return (
              <BranchOfficeTabOptionMenu
                onClick={changePageToggle(i)}
                text={v}
                isSelected={i === pageSelect}
                isToggleActive={toggleMenu}
                pageSelected={pageSelect}
              />
            );
          }
          return (
            <BranchOfficeTabOption
              onClick={changePage(i)}
              text={v}
              isSelected={i === pageSelect}
            />
          );
        })}
      </S.TabOptionContainer>
      <div>{componentSelector(pageSelect)}</div>
    </div>
  );
};

export default BranchDetailTabMenu;
