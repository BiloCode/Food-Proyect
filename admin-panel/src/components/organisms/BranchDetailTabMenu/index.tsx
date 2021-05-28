import * as S from "./styles";

import { useState } from "react";
import { IoMdArrowDropdown, IoIosAddCircle, IoMdTrash } from "react-icons/io";

import BranchMenu from "components/templates/BranchMenu";
import BranchInformation from "components/organisms/BranchInformation";
import BranchComments from "components/templates/BranchComments";
import classNames from "classnames";
import Icon from "components/atoms/Icon";

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
    setPageSelect(() => index);
    setToggleMenu(false);
  };

  const changePageToggle = (index: number) => () => {
    setPageSelect(() => index);
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <S.TabOptionContainer>
        {tabPages.map((v, i) => {
          if (i !== 2) {
            return (
              <S.Option
                key={i}
                onClick={changePage(i)}
                className={classNames({
                  active: i === pageSelect,
                })}
              >
                {v}
              </S.Option>
            );
          } else {
            return (
              <S.Option
                key={i}
                onClick={changePageToggle(i)}
                className={classNames({
                  active: i === pageSelect,
                })}
              >
                {v}
                {pageSelect === 2 && (
                  <S.IconMenu>
                    <Icon
                      size="small-medium"
                      color="blue"
                      type={IoMdArrowDropdown}
                    />
                  </S.IconMenu>
                )}
                {pageSelect === 2 && (
                  <S.DropDownContainer
                    className={classNames({
                      toggleActive: !toggleMenu,
                    })}
                  >
                    <S.DropDownOption>
                      <Icon type={IoIosAddCircle} size="medium" />
                      <div>Crear nuevo comestible</div>
                    </S.DropDownOption>
                    <S.DropDownOption>
                      <Icon type={IoMdTrash} size="medium" />
                      <div>Eliminar comestibles</div>
                    </S.DropDownOption>
                  </S.DropDownContainer>
                )}
              </S.Option>
            );
          }
        })}
      </S.TabOptionContainer>
      <div>{componentSelector(pageSelect)}</div>
    </div>
  );
};

export default BranchDetailTabMenu;
