import { useEffect, useState } from "react";
import { useParams } from "@reach/router";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

import { Utils, Types } from "@food/shared";

type BranchOfficeData = {
  stars: number;
  data: Types.BranchOffice;
  uAuthPuntuaction: Types.PuntuactionType;
};

const useGetBranchOfficeDetail = () => {
  const { user } = useAuthContext();
  const { branchOfficeId } = useParams();
  const { branchOffices, requestState } = useBranchOfficeContext();

  const [branchOfficeData, setBranchOfficeData] = useState<BranchOfficeData>({
    data: null,
    stars: 0,
    uAuthPuntuaction: null,
  });

  useEffect(() => {
    if (requestState !== "complete") return;

    const filterDataFromContext = () => {
      const currentBranch = branchOffices.find((v) => v._id === branchOfficeId);
      const uAuthPuntuaction = currentBranch.puntuactions.find(
        (v) => v.userId === user?._id
      );

      let data = currentBranch;

      if (uAuthPuntuaction) {
        const currentBranchCopy = { ...currentBranch };

        data = {
          ...currentBranchCopy,
          puntuactions: currentBranchCopy.puntuactions.filter(
            (v) => v.userId !== user?._id
          ),
        };
      }

      return {
        data,
        uAuthPuntuaction,
        stars: Utils.getStarsAverage(currentBranch.puntuactions),
      };
    };

    const { data, uAuthPuntuaction, stars } = filterDataFromContext();

    setBranchOfficeData(() => ({
      data,
      stars,
      uAuthPuntuaction,
    }));
  }, [branchOffices, user, requestState]);

  return {
    userAuth: user,
    branchOffice: branchOfficeData,
  };
};

export default useGetBranchOfficeDetail;
