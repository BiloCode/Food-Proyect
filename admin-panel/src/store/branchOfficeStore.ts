import { atom } from "jotai";
import { useParams } from "@reach/router";

import type { RequestStateType } from "application/types/RequestStateType";
import type { BranchOfficeModelType } from "application/types/BranchOfficeModelType";
import GetAllBranchOffice from "application/core/GetAllBranchOffice";

type BranchOfficeAtom = {
  data: BranchOfficeModelType[];
  requestState: RequestStateType;
};

export const branchOfficeStore = atom<BranchOfficeAtom>({
  data: [],
  requestState: "loading",
});

branchOfficeStore.onMount = (setAtom) => {
  (async () => {
    const branchOffices = await GetAllBranchOffice.exec();
    setAtom({
      data: branchOffices,
      requestState: "complete",
    });
  })();
};

export const branchOfficeById = atom((get) => {
  const pageParams = useParams();
  const branchStored = get(branchOfficeStore);

  return branchStored.data.find((v) => v._id === pageParams?.id);
});
