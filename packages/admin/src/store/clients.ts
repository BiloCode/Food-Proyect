import { atom } from "jotai";

import type { RequestStateType } from "@food-proyect/shared-types";
import type { ClientModelType } from "@food-proyect/shared-types";

import GetAllClient from "application/core/GetAllClient";

type ClientAtom = {
  data: ClientModelType[];
  requestState: RequestStateType;
};

export const clients = atom<ClientAtom>({
  data: [],
  requestState: "loading",
});

clients.onMount = (setAtom) => {
  (async () => {
    const clients = await GetAllClient.exec();
    setAtom({
      data: clients,
      requestState: "complete",
    });
  })();
};
