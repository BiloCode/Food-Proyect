import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";

import { Icon } from "@food/components";

import useActive from "hooks/useActive";
import { useState } from "react";

type optionType = "All" | "vegetarian" | "carnivorous" | "mix";

type BranchOfficeSelectProps = {
  onClickOption(option: optionType): void;
};

const BranchOfficeSelect = ({ onClickOption }: BranchOfficeSelectProps) => {
  const { active, toggleActive } = useActive();

  const [searchText, setSearchText] = useState("Ver Todos");

  return (
    <S.Container onClick={toggleActive}>
      <span>{searchText}</span>
      <Icon size="small" color="gray" type={IoIosArrowDown} />
      {active && (
        <S.OptionsContainer>
          <S.Option
            onClick={() => {
              onClickOption("All");
              setSearchText("Ver Todos");
            }}
          >
            Ver Todos
          </S.Option>
          <S.Option
            onClick={() => {
              onClickOption("carnivorous");
              setSearchText("Carnico");
            }}
          >
            Carnico
          </S.Option>
          <S.Option
            onClick={() => {
              onClickOption("vegetarian");
              setSearchText("Vegetariano");
            }}
          >
            Vegetariano
          </S.Option>
          <S.Option
            onClick={() => {
              onClickOption("mix");
              setSearchText("Mixtos");
            }}
          >
            Mixtos
          </S.Option>
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

export default BranchOfficeSelect;
