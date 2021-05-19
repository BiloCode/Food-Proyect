import { atom } from "jotai";

import type { RequestStateType } from "application/types/RequestStateType";

type BranchOfficeAtom = {
  data: any;
  requestState: RequestStateType;
};

export const branchOfficeStore = atom<BranchOfficeAtom>({
  data: null,
  requestState: "loading",
});

branchOfficeStore.onMount = (setAtom) => {};
