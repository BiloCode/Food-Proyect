import { ChangeEvent, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import FoodCard from "components/molecules/FoodCard";
import SearchBar from "components/molecules/SearchBar";
import HeaderTitle from "components/molecules/HeaderTitle";
import FoodModalCreate from "components/organisms/FoodModalCreate";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";
import DropdownFoodActions from "components/molecules/DropdownFoodActions";

import { useAtomValue } from "jotai/utils";
import { foodStore } from "store/foodStore";
import { FoodModelType } from "application/types/FoodModelType";

import useActive from "hooks/useActive";

const Foods = (_: RouteComponentProps) => {
  const foods = useAtomValue(foodStore);

  const { active, toggleActive } = useActive();

  const [foodFilter, setFoodFiltered] = useState<FoodModelType[]>([]);

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

    setFoodFiltered(foods.data);
  }, []);

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
            <DropdownFoodActions
              onClickRemoveFood={() => null}
              onClickFoodCreate={toggleActive}
            />
          </S.ActionsContainer>
          <S.FoodListContainer>
            <S.FoodList>
              {foodFilter.map((v) => (
                <FoodCard key={v._id} foodData={v} />
              ))}
            </S.FoodList>
          </S.FoodListContainer>
        </S.ContainerContent>
      </PageLimiterContainer>
      {active && <FoodModalCreate onClose={toggleActive} />}
    </PageWithSidebarBox>
  );
};

export default Foods;
