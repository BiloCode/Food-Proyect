import { atom } from "jotai";

import GetAllFood from "application/core/GetAllFood";

import type { RequestStateType } from "application/types/RequestStateType";
import type { FoodModelType } from "application/types/FoodModelType";

type FoodAtom = {
  data: FoodModelType[];
  requestState: RequestStateType;
};

export const foodStore = atom<FoodAtom>({
  data: [],
  requestState: "loading",
});

foodStore.onMount = (setAtom) => {
  (async () => {
    const food = await GetAllFood.exec();
    setAtom({
      data: food,
      requestState: "complete",
    });
  })();
};

export const addNewFood = atom(null, (_, set, new_food: FoodModelType) => {
  set(foodStore, (food) => ({
    ...food,
    data: [...food.data, new_food],
  }));
});
