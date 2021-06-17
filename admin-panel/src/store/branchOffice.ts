import { atom } from "jotai";
import { useParams } from "@reach/router";

import type { RequestStateType } from "application/types/RequestStateType";
import type {
  BranchOfficeModelType,
  MenuType,
} from "application/types/BranchOfficeModelType";
import GetAllBranchOffice from "application/core/GetAllBranchOffice";

type BranchOfficeAtom = {
  data: BranchOfficeModelType[];
  requestState: RequestStateType;
};

export const branchOffice = atom<BranchOfficeAtom>({
  data: [],
  requestState: "loading",
});

branchOffice.onMount = (setAtom) => {
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
  const branchStored = get(branchOffice);

  return branchStored.data.find((v) => v._id === pageParams?.id);
});

type MenuBranch = {
  branchId: string;
  menu: MenuType[];
};

export const setBranchMenu = atom(null, (get, set, props: MenuBranch) => {
  set(branchOffice, (branch) => ({
    ...branch,
    data: branch.data.map((v) => {
      if (v._id === props.branchId) {
        return { ...v, menu: props.menu };
      }

      return v;
    }),
  }));
});
