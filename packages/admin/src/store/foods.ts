import { atom } from "jotai";

import GetAllFood from "application/core/GetAllFood";

import type { Food } from "@food/shared-types";
import type { RequestState } from "@food/shared-types";

type FoodAtom = {
  data: Food[];
  requestState: RequestState;
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

export const addNewFood = atom(null, (_, set, new_food: Food) => {
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
