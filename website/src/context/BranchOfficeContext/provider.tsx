import { FC, useEffect, useState } from "react";

import { BranchOfficeContext, UploadBranchData } from "./context";
import { RequestStateType } from "application/types/RequestStateType";
import { BranchOfficeModelType } from "application/types/BranchOfficeModelType";

import GetBranchOfficeList from "application/core/GetBranchOfficeList";

export const BranchOfficeProvider: FC = ({ children }) => {
  const [requestState, setRequestState] = useState<RequestStateType>("loading");
  const [branchOffices, setBranchOffices] = useState<BranchOfficeModelType[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const branchOfficeList = await GetBranchOfficeList.exec();
      if (!branchOfficeList) {
        setRequestState(() => "error");
        return;
      }

      setBranchOffices(() => branchOfficeList);
      setRequestState(() => "complete");
    })();
  }, []);

  const setBranchOfficePuntuaction = (
    branchOfficeId: string,
    uploadData: UploadBranchData
  ) => {
    const { puntuactions, stars } = uploadData;

    const branchListUpdated = [...branchOffices].map((v) => {
      if (v._id === branchOfficeId) {
        return {
          ...v,
          stars,
          puntuactions,
        };
      }

      return v;
    });

    setBranchOffices(() => branchListUpdated);
  };

  const removeBranchOfficePuntuaction = (
    branchOfficeId: string,
    puntuactionId: string
  ) => {
    const branchListUpdated = [...branchOffices].map((v) => {
      if (v._id === branchOfficeId) {
        return {
          ...v,
          puntuactions: v.puntuactions.filter(
            (v) => v.userId !== puntuactionId
          ),
        };
      }

      return v;
    });

    setBranchOffices(() => branchListUpdated);
  };

  return (
    <BranchOfficeContext.Provider
      value={{
        branchOffices,
        requestState,
        setBranchOfficePuntuaction,
        removeBranchOfficePuntuaction,
      }}
    >
      {children}
    </BranchOfficeContext.Provider>
  );
};
