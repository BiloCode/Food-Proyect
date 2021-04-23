import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import Icon from "components/atoms/Icon";
import { useState } from "react";

const SucursalSelect = () => {
  const [active, setActive] = useState<Boolean>(false);

  const toggleActive = () => setActive((value) => !value);

  return (
    <S.SucursalSelectContainer onClick={toggleActive}>
      <span>Ver Todos</span>
      <Icon size="small" color="gray" Type={IoIosArrowDown} />
      {active && (
        <S.SucursalOptionsContainer>
          <S.SucursalOption>Ver Todos</S.SucursalOption>
          <S.SucursalOption>Carnico</S.SucursalOption>
          <S.SucursalOption>Vegetariano</S.SucursalOption>
        </S.SucursalOptionsContainer>
      )}
    </S.SucursalSelectContainer>
  );
};

export default SucursalSelect;
