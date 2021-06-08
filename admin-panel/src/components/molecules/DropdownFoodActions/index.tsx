import * as S from "./styles";

import Icon from "components/atoms/Icon";

import { BsChevronDown } from "react-icons/bs";

import useActive from "hooks/useActive";

type DropdownProps = {
  onClickFoodCreate(): void;
  onClickRemoveFood(): void;
};

const DropdownFoodActions = ({
  onClickFoodCreate,
  onClickRemoveFood,
}: DropdownProps) => {
  const { active, toggleActive } = useActive();

  const onFoodCreate = () => {
    toggleActive();
    onClickFoodCreate();
  };

  const onRemoveFood = () => {
    toggleActive();
    onClickRemoveFood();
  };

  return (
    <S.MainContainer>
      <S.ButtonDropdown onClick={toggleActive}>
        <S.ButtonNestingContainer>
          <S.ButtonMessage>Operaciones</S.ButtonMessage>
          <Icon type={BsChevronDown} size="small" />
        </S.ButtonNestingContainer>
      </S.ButtonDropdown>
      {active && (
        <S.DropdownList>
          <S.DropdownItem>
            <S.ButtonDropdown onClick={onFoodCreate}>
              Crear nueva comida
            </S.ButtonDropdown>
          </S.DropdownItem>
          <S.DropdownItem>
            <S.ButtonDropdown onClick={onRemoveFood}>
              Remover de la lista
            </S.ButtonDropdown>
          </S.DropdownItem>
        </S.DropdownList>
      )}
    </S.MainContainer>
  );
};

export default DropdownFoodActions;
