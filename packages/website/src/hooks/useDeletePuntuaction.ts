import { useState } from "react";

import RemovePuntuaction from "application/core/puntuaction/RemovePuntuaction";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import { useToasts } from "react-toast-notifications";

const useDeletePuntuaction = (
  puntuactionId: string,
  branchOfficeId: string
) => {
  const [isSendData, setIsSendData] = useState(false);

  const { addToast } = useToasts();
  const { user, changeUserAuthData } = useAuthContext();
  const { removeBranchOfficePuntuaction } = useBranchOfficeContext();

  const onDeletePuntuaction = async () => {
    if (!user) return;

    setIsSendData(() => true);

    const newData = await RemovePuntuaction.exec(branchOfficeId, user._id);
    if (!newData) {
      addToast("Se produjo un error al eliminar.", { appearance: "error" });
      setIsSendData(() => false);
      return;
    }

    removeBranchOfficePuntuaction(branchOfficeId, puntuactionId);
    changeUserAuthData({ ...user, puntuaction: newData.userPuntuactions });
    setIsSendData(() => false);
  };

  return {
    isSendData,
    onDeletePuntuaction,
  };
};

export default useDeletePuntuaction;
