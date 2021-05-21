import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";
import { atom } from "jotai";

type StoreData = {
  branch?: BranchOfficeModelType;
};

export const currentBranchStore = atom<StoreData>({});
