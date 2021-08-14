import { BranchOffice } from "@food/shared-types";
import { atom } from "jotai";

type StoreData = {
  branch?: BranchOffice;
};

export const currentBranch = atom<StoreData>({});
