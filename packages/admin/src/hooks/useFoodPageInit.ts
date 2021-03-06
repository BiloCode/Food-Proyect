import { ChangeEvent, useEffect, useState } from "react";

import { useAtomValue, useResetAtom } from "jotai/utils";
import { foods as foodStore } from "store/foods";
import { deleteMode } from "store/foodDeleteMode";

import { Food } from "@food/shared-types";

const useFoodPageInit = () => {
  const foods = useAtomValue(foodStore);
  const resetDeleteMode = useResetAtom(deleteMode);

  const [foodFilter, setFoodFiltered] = useState<Food[]>([]);

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
    foodFilter,
    onSearchByName,
    foodStored: foods.data.length,
  };
};

export default useFoodPageInit;
