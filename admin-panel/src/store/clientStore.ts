import { atom } from "jotai";

import type { RequestStateType } from "application/types/RequestStateType";
import type { ClientModelType } from "application/types/ClientModelType";

import GetAllClient from "application/core/GetAllClient";

type ClientAtom = {
  data: ClientModelType[];
  requestState: RequestStateType;
};

export const clientStore = atom<ClientAtom>({
  data: [],
  requestState: "loading",
});

clientStore.onMount = (setAtom) => {
  (async () => {
    const clients = await GetAllClient.exec();
    setAtom({
      data: clients,
      requestState: "complete",
    });
  })();
};
