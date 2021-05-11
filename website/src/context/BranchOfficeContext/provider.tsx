import { FC, useEffect, useState } from "react";

import { BranchOfficeContext } from "./context";
import { RequestStateType } from "application/types/RequestStateType";
import {
  BranchOfficeModelType,
  PuntuactionType,
} from "application/types/BranchOfficeModelType";

import GetBranchOfficeList from "application/core/GetBranchOfficeList";

export const BranchOfficeProvider: FC = ({ children }) => {
  const [requestState, setRequestState] = useState<RequestStateType>("loading");
  const [branchOffices, setBranchOffices] = useState<BranchOfficeModelType[]>(
    []
  );

  const [branchOfficeFilter, setBranchOfficeFilter] = useState<
    BranchOfficeModelType[]
  >([]);

  useEffect(() => {
    (async () => {
      const branchOfficeList = await GetBranchOfficeList.exec();
      if (!branchOfficeList) {
        setRequestState(() => "error");
        return;
      }

      setBranchOffices(() => branchOfficeList);
      setRequestState(() => "complete");
      setBranchOfficeFilter(branchOfficeList);
    })();
  }, []);

  const setBranchOfficePuntuaction = (
    branchOfficeId: string,
    puntuactions: PuntuactionType[]
  ) => {
    const branchListUpdated = [...branchOffices].map((v) => {
      if (v._id === branchOfficeId) {
        return {
          ...v,
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

  const changeSearch = (search: string) => {
    let newList: BranchOfficeModelType[] = [];
    branchOffices.map((v) => {
      let name = v.name.toLowerCase();
      if (name.includes(search)) {
        newList.push(v);
      }
    });

    setBranchOfficeFilter(newList);
  };

  return (
    <BranchOfficeContext.Provider
      value={{
        branchOffices,
        requestState,
        setBranchOfficePuntuaction,
        removeBranchOfficePuntuaction,
        changeSearch,
        branchOfficeFilter,
      }}
    >
      {children}
    </BranchOfficeContext.Provider>
  );
};
