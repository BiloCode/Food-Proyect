import { useEffect, useState } from "react";
import { useParams } from "@reach/router";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

import {
  BranchOfficeModelType,
  PuntuactionType,
} from "application/types/BranchOfficeModelType";

type BranchOfficeData = {
  data: BranchOfficeModelType;
  uAuthPuntuaction: PuntuactionType;
};

const useGetBranchOfficeDetail = () => {
  const { user } = useAuthContext();
  const { branchOfficeId } = useParams();
  const { branchOffices, requestState } = useBranchOfficeContext();

  const [branchOfficeData, setBranchOfficeData] = useState<BranchOfficeData>({
    data: null,
    uAuthPuntuaction: null,
  });

  useEffect(() => {
    if (requestState !== "complete") return;

    const filterDataFromContext = () => {
      const currentBranch = branchOffices.find((v) => v._id === branchOfficeId);
      const uAuthPuntuaction = currentBranch.puntuactions.find(
        (v) => v.userId === user?._id
      );

      let dataBranchOffice = currentBranch;

      if (uAuthPuntuaction) {
        const nowBranchCopy = { ...currentBranch };

        dataBranchOffice = {
          ...nowBranchCopy,
          puntuactions: nowBranchCopy.puntuactions.filter(
            (v) => v.userId !== user?._id
          ),
        };
      }

      return {
        uAuthPuntuaction,
        dataBranchOffice,
      };
    };

    const { dataBranchOffice, uAuthPuntuaction } = filterDataFromContext();

    setBranchOfficeData(() => ({
      uAuthPuntuaction,
      data: dataBranchOffice,
    }));
  }, [branchOffices, user, requestState]);

  return {
    userAuth: user,
    branchOffice: branchOfficeData,
  };
};

export default useGetBranchOfficeDetail;
