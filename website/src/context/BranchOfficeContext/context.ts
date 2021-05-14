import { createContext, useContext } from "react";
import {
  BranchOfficeModelType,
  PuntuactionType,
} from "application/types/BranchOfficeModelType";

import { RequestStateType } from "application/types/RequestStateType";

export type UploadBranchData = {
  stars: number;
  userPuntuactionsId: string[];
  puntuactions: PuntuactionType[];
};

type IContext = {
  branchOffices: BranchOfficeModelType[];
  requestState: RequestStateType;
  removeBranchOfficePuntuaction(branchOfficeId: string, puntuactionId: string);
  setBranchOfficePuntuaction(
    branchOfficeId: string,
    uploadData: UploadBranchData
  );
};

export const BranchOfficeContext = createContext<IContext>({
  branchOffices: [],
  requestState: "loading",
  setBranchOfficePuntuaction() {},
  removeBranchOfficePuntuaction() {},
});

export const useBranchOfficeContext = () => useContext(BranchOfficeContext);
