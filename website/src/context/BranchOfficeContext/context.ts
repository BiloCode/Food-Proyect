import { createContext, useContext } from "react";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";
import { RequestStateType } from "application/types/RequestStateType";

type IContext = {
  branchOffices: BranchOfficeModelType[];
  requestState: RequestStateType;
};

export const BranchOfficeContext = createContext<IContext>({
  branchOffices: [],
  requestState: "loading",
});

export const useBranchOfficeContext = () => useContext(BranchOfficeContext);
