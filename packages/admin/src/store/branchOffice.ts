import { atom } from "jotai";
import { useParams } from "@reach/router";

import { MenuType, BranchOffice, RequestState } from "@food/shared-types";

import GetAllBranchOffice from "application/core/GetAllBranchOffice";

type BranchOfficeAtom = {
  data: BranchOffice[];
  requestState: RequestState;
};

export const branchOffice = atom<BranchOfficeAtom>({
  data: [],
  requestState: "loading",
});

// branchOffice.onMount = (setAtom) => {
//   (async () => {
//     const branchOffices = await GetAllBranchOffice.exec();
//     setAtom({
//       data: branchOffices,
//       requestState: "complete",
//     });
//   })();
// };

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

type MenuDelete = {
  branchId: string;
  idsDelete: string[];
};

export const removeBranchMenu = atom(null, (get, set, props: MenuDelete) => {
  const currentBranch = [...get(branchOffice).data].find(
    (v) => v._id === props.branchId
  );

  const currentMenu = [...currentBranch.menu].filter(
    (v) => !props.idsDelete.includes(v._id)
  );

  set(branchOffice, (branch) => ({
    ...branch,
    data: branch.data.map((v) => {
      if (v._id === props.branchId) {
        return { ...currentBranch, menu: currentMenu };
      }

      return v;
    }),
  }));
});
