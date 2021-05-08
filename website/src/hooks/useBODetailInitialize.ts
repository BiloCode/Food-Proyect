import { useEffect, useState } from "react";
import { useParams } from "@reach/router";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

import useActive from "./useActive";

import {
  BranchOfficeModelType,
  PuntuactionType,
} from "application/types/BranchOfficeModelType";

const useBODetailInitialize = () => {
  const { user } = useAuthContext();
  const { branchOfficeId } = useParams();
  const { active, toggleActive } = useActive();
  const { branchOffices } = useBranchOfficeContext();

  const [currentData, setCurrentData] = useState<BranchOfficeModelType>();
  const [uAuthPuntuaction, setUAuthPuntuaction] = useState<PuntuactionType>();

  useEffect(() => {
    const currentBranch = branchOffices.find((v) => v._id === branchOfficeId);
    const userAuthPuntuaction = currentBranch?.puntuactions.find(
      (v) => v._id === user?._id
    );

    setCurrentData(() => currentBranch);
    setUAuthPuntuaction(() => userAuthPuntuaction);
  }, []);

  return {
    user,
    currentData,
    uAuthPuntuaction,
    menuActive: active,
    toggleMenuActive: toggleActive,
  };
};

export default useBODetailInitialize;
