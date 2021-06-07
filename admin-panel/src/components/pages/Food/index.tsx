import { ChangeEvent, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import FoodActions from "components/organisms/FoodActions";
import HeaderTitle from "components/molecules/HeaderTitle";
import FoodGridList from "components/organisms/FoodGridList";
import FoodModalCreate from "components/organisms/FoodModalCreate";
import PageLimiterContainer from "components/atoms/PageLimiterContainer";
import PageWithSidebarBox from "components/templates/PageWithSidebarBox";

import { useAtomValue } from "jotai/utils";
import { foodStore } from "store/foodStore";
import { FoodModelType } from "application/types/FoodModelType";

import useActive from "hooks/useActive";

const Foods = (_: RouteComponentProps) => {
  const foods = useAtomValue(foodStore);
  const createModal = useActive();

  const [foodFilter, setFoodFiltered] = useState<FoodModelType[]>([]);

  const onSearch = (ev: ChangeEvent<HTMLInputElement>) => {
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
  }, [foods]);

  return (
    <PageWithSidebarBox>
      <PageLimiterContainer>
        <HeaderTitle title="Nuestros Comestibles" />
        <S.ContainerContent>
          <FoodActions
            onChangeSearch={onSearch}
            onCreateToggle={createModal.toggleActive}
          />
          <FoodGridList foods={foodFilter} />
        </S.ContainerContent>
      </PageLimiterContainer>
      {createModal.active && (
        <FoodModalCreate onClose={createModal.toggleActive} />
      )}
    </PageWithSidebarBox>
  );
};

export default Foods;
