import { createContext, useContext } from "react";
import { Types } from "@food/shared";

export type UploadBranchData = {
  userPuntuactionsId: string[];
  puntuactions: Types.PuntuactionType[];
};

type IContext = {
  branchOffices: Types.BranchOffice[];
  requestState: Types.RequestState;
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
