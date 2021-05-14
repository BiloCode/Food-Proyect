import RemovePuntuaction from "application/core/RemovePuntuaction";
import RemovePuntuactionInUser from "application/core/RemovePuntuactionInUser";
import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import { useState } from "react";

const useDeletePuntuaction = (
  puntuactionId: string,
  branchOfficeId: string
) => {
  const [isSendData, setIsSendData] = useState(false);

  const { user, changeUserAuthData } = useAuthContext();
  const { removeBranchOfficePuntuaction } = useBranchOfficeContext();

  const onDeletePuntuaction = async () => {
    if (!user) return;

    setIsSendData(() => true);

    const isRemoved = await RemovePuntuaction.exec(branchOfficeId, user._id);

    //Refactor Pendiente
    if (isRemoved) {
      const userPuntuaction = await RemovePuntuactionInUser.exec(
        branchOfficeId,
        user._id
      );

      if (!userPuntuaction) return;

      changeUserAuthData({ ...user, puntuaction: userPuntuaction });
    }

    setIsSendData(() => false);
    removeBranchOfficePuntuaction(branchOfficeId, puntuactionId);
  };

  return {
    isSendData,
    onDeletePuntuaction,
  };
};

export default useDeletePuntuaction;
