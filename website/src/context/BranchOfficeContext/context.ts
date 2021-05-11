import { createContext, useContext } from "react";
import {
  BranchOfficeModelType,
  PuntuactionType,
} from "application/types/BranchOfficeModelType";

import { RequestStateType } from "application/types/RequestStateType";

type IContext = {
  branchOffices: BranchOfficeModelType[];
  requestState: RequestStateType;
  changeSearch?(search: string): void;
  branchOfficeFilter?: BranchOfficeModelType[];
  removeBranchOfficePuntuaction(branchOfficeId: string, puntuactionId: string);
  setBranchOfficePuntuaction(
    branchOfficeId: string,
    puntuactions: PuntuactionType[]
  );
};

export const BranchOfficeContext = createContext<IContext>({
  branchOffices: [],
  requestState: "loading",
  setBranchOfficePuntuaction() {},
  removeBranchOfficePuntuaction() {},
});

export const useBranchOfficeContext = () => useContext(BranchOfficeContext);
