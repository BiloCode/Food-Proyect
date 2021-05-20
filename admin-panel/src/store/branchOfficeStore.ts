import { atom } from "jotai";

import type { RequestStateType } from "application/types/RequestStateType";
import type { BranchOfficeModelType } from "application/types/BranchOfficeModelType";

type BranchOfficeAtom = {
  data: BranchOfficeModelType[];
  requestState: RequestStateType;
};

export const branchOfficeStore = atom<BranchOfficeAtom>({
  data: [],
  requestState: "loading",
});

branchOfficeStore.onMount = (setAtom) => {};
