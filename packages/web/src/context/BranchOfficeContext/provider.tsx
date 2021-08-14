import { FC, useEffect, useState } from "react";

import { Types } from "@food/shared";
import { BranchOfficeContext, UploadBranchData } from "./context";

import GetBranchOfficeList from "application/core/GetBranchOfficeList";

export const BranchOfficeProvider: FC = ({ children }) => {
  const [requestState, setRequestState] =
    useState<Types.RequestState>("loading");
  const [branchOffices, setBranchOffices] = useState<Types.BranchOffice[]>([]);

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
    const { puntuactions, userPuntuactionsId } = uploadData;

    const branchListUpdated = [...branchOffices].map((v) => {
      if (v._id === branchOfficeId) {
        return {
          ...v,
          puntuactions,
          userPuntuactionsId,
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
