import { useState } from "react";
import * as S from "./styles";

import { IoIosArrowDown } from "react-icons/io";

import Icon from "components/atoms/Icon";

import useActive from "hooks/useActive";

import { FoodType } from "@food-proyect/shared-types";

type BranchOfficeSelectTypeProps = {
  onClickOption(option: FoodType): void;
};

const BranchOfficeSelectType = ({
  onClickOption,
}: BranchOfficeSelectTypeProps) => {
  const { active, toggleActive } = useActive();

  const [searchText, setSearchText] = useState<string>("Seleccionar uno...");

  return (
    <S.Container onClick={toggleActive}>
      <span>{searchText}</span>
      <Icon size="small" color="gray" type={IoIosArrowDown} />
      {active && (
        <S.OptionsContainer>
          <S.Option
            onClick={() => {
              onClickOption("mix");
              setSearchText("Mixtos");
            }}
          >
            Mixtos
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
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

export default BranchOfficeSelectType;
