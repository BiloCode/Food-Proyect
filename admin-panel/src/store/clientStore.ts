import { atom } from "jotai";

import type { RequestStateType } from "application/types/RequestStateType";

type ClientAtom = {
  data: any;
  requestState: RequestStateType;
};

export const clientStore = atom<ClientAtom>({
  data: null,
  requestState: "loading",
});

clientStore.onMount = (setAtom) => {};
