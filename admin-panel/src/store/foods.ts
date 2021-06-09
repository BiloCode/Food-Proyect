import { atom } from "jotai";

import GetAllFood from "application/core/GetAllFood";

import type { RequestStateType } from "application/types/RequestStateType";
import type { FoodModelType } from "application/types/FoodModelType";

type FoodAtom = {
  data: FoodModelType[];
  requestState: RequestStateType;
};

export const foods = atom<FoodAtom>({
  data: [],
  requestState: "loading",
});

foods.onMount = (setAtom) => {
  (async () => {
    const food = await GetAllFood.exec();
    setAtom({
      data: food,
      requestState: "complete",
    });
  })();
};

export const addNewFood = atom(null, (_, set, new_food: FoodModelType) => {
  set(foods, (food) => ({
    ...food,
    data: [...food.data, new_food],
  }));
});

export const deleteGroupById = atom(null, (_, set, ids: string[]) => {
  set(foods, (food) => ({
    ...food,
    data: [...food.data].filter((v) => !ids.includes(v._id)),
  }));
});
