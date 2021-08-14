import { atom } from "jotai";

import type { RequestState } from "@food/shared-types";
import type { Client } from "@food/shared-types";

import GetAllClient from "application/core/GetAllClient";

type ClientAtom = {
  data: Client[];
  requestState: RequestState;
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
