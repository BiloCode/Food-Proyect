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
    <div>
      <button onClick={toggleActive}>
        <span>Acciones</span>
        <Icon type={BsChevronDown} />
      </button>
      {active && (
        <ul>
          <li>
            <button onClick={onFoodCreate}>Crear nueva comida</button>
          </li>
          <li>
            <button onClick={onRemoveFood}>Remover de la lista</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownFoodActions;
