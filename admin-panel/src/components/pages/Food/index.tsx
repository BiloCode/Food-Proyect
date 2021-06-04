import { ChangeEvent, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import SearchBar from "components/molecules/SearchBar";
import HeaderTitle from "components/molecules/HeaderTitle";
import FoodModalCreate from "components/organisms/FoodModalCreate";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import DropdownFoodActions from "components/molecules/DropdownFoodActions";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { deleteMode, foodStore } from "store/foodStore";
import { FoodModelType } from "application/types/FoodModelType";

import useActive from "hooks/useActive";
import FoodGridList from "components/organisms/FoodGridList";

const Foods = (_: RouteComponentProps) => {
  const foods = useAtomValue(foodStore);
  const foodDeleteMode = useAtomValue(deleteMode);
  const setFoodDeleteMode = useUpdateAtom(deleteMode);

  const { active, toggleActive } = useActive();

  const [foodFilter, setFoodFiltered] = useState<FoodModelType[]>([]);

  const onClickDeleteMode = () => {
    setFoodDeleteMode(() => true);
  };

  const onChangeSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target?.value.toLocaleUpperCase();
    const newList = [...foods.data].filter((v) => {
      const clientDescription = v.name.toLocaleUpperCase();
      return clientDescription.includes(inputValue);
    });

    setFoodFiltered(() => newList);
  };

  useEffect(() => {
    if (foods.requestState !== "complete") return;

    setFoodFiltered(() => foods.data);
  }, [foods.requestState]);

  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle title="Nuestros Comestibles" />
        <S.ContainerContent>
          <S.ActionsContainer>
            <S.SearchBarContainer>
              <SearchBar
                onChange={onChangeSearch}
                placeholder="Digite un nombre..."
              />
            </S.SearchBarContainer>
            {!foodDeleteMode && (
              <DropdownFoodActions
                onClickFoodCreate={toggleActive}
                onClickRemoveFood={onClickDeleteMode}
              />
            )}
          </S.ActionsContainer>
          <FoodGridList foods={foodFilter} />
        </S.ContainerContent>
      </PageLimiterContainer>
      {active && <FoodModalCreate onClose={toggleActive} />}
    </PageWithSidebarBox>
  );
};

export default Foods;
