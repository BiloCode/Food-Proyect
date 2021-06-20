import { BranchOfficeModelType } from "@food-proyect/shared-types";
import { atom } from "jotai";

type StoreData = {
  branch?: BranchOfficeModelType;
};

export const currentBranch = atom<StoreData>({});
