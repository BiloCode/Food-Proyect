import { ChangeEvent, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import FoodCard from "components/molecules/FoodCard";
import SearchBar from "components/molecules/SearchBar";
import HeaderTitle from "components/molecules/HeaderTitle";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

import { useAtomValue } from "jotai/utils";
import { foodStore } from "store/foodStore";
import { FoodModelType } from "application/types/FoodModelType";

const Foods = (_: RouteComponentProps) => {
  const foods = useAtomValue(foodStore);

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
          <S.SearchBarContainer>
            <SearchBar
              onChange={onChangeSearch}
              placeholder="Digite un nombre..."
            />
          </S.SearchBarContainer>
          <S.FoodListContainer>
            <S.FoodList>
              {foodFilter.map((v) => (
                <FoodCard key={v._id} foodData={v} />
              ))}
            </S.FoodList>
          </S.FoodListContainer>
        </S.ContainerContent>
      </PageLimiterContainer>
    </PageWithSidebarBox>
  );
};

export default Foods;
