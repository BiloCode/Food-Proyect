import * as S from "./styles";

import Icon from "components/atoms/Icon";
import BranchOfficeTabOption from "components/atoms/BranchOfficeTabOption";

import classNames from "classnames";
import { IoMdArrowDropdown, IoIosAddCircle, IoMdTrash } from "react-icons/io";

type BranchOfficeTabOptionMenuProps = {
  onClick(): void;
  text: string;
  pageSelected: number;
  isSelected: boolean;
  isToggleActive: boolean;
};

const BranchOfficeTabOptionMenu = ({
  onClick,
  text,
  pageSelected,
  isSelected,
  isToggleActive,
}: BranchOfficeTabOptionMenuProps) => {
  return (
    <BranchOfficeTabOption
      onClick={onClick}
      isSelected={isSelected}
      text={text}
    >
      {pageSelected === 2 && (
        <S.IconMenu>
          <Icon size="small-medium" color="blue" type={IoMdArrowDropdown} />
        </S.IconMenu>
      )}
      {pageSelected === 2 && (
        <S.DropDownContainer
          className={classNames({
            toggleActive: !isToggleActive,
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
    </BranchOfficeTabOption>
  );
};

export default BranchOfficeTabOptionMenu;
