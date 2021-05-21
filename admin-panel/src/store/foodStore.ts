import { atom } from "jotai";

import type { RequestStateType } from "application/types/RequestStateType";

type FoodAtom = {
  data: any[];
  requestState: RequestStateType;
};

export const foodStore = atom<FoodAtom>({
  data: [],
  requestState: "complete",
});

foodStore.onMount = (setAtom) => {};
