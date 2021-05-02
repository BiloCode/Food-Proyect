import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";

import Icon from "components/atoms/Icon";

import useActive from "hooks/useActive";

const BranchOfficeSelect = () => {
  const { active, toggleActive } = useActive();

  return (
    <S.Container onClick={toggleActive}>
      <span>Ver Todos</span>
      <Icon size="small" color="gray" Type={IoIosArrowDown} />
      {active && (
        <S.OptionsContainer>
          <S.Option>Ver Todos</S.Option>
          <S.Option>Carnico</S.Option>
          <S.Option>Vegetariano</S.Option>
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

export default BranchOfficeSelect;
