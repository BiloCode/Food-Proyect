import { ChangeEvent, useEffect, useState } from "react";

import { useAtomValue, useResetAtom } from "jotai/utils";
import { foodStore } from "store/foodStore";
import { deleteMode } from "store/foodDeleteMode";

import { FoodModelType } from "application/types/FoodModelType";

import useActive from "hooks/useActive";

const useFoodPageInit = () => {
  const createModal = useActive();

  const foods = useAtomValue(foodStore);
  const resetDeleteMode = useResetAtom(deleteMode);

  const [foodFilter, setFoodFiltered] = useState<FoodModelType[]>([]);

  const onSearchByName = (ev: ChangeEvent<HTMLInputElement>) => {
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

    return () => {
      resetDeleteMode();
    };
  }, [foods]);

  return {
    onSearchByName,
    foodFilter,
    createModal,
  };
};

export default useFoodPageInit;
