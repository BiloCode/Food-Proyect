import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";
import { atom } from "jotai";

type StoreData = {
  branch?: BranchOfficeModelType;
};

export const currentBranch = atom<StoreData>({});
