import { useRef, useState } from "react";

import CreatePuntuaction from "application/core/CreatePuntuaction";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import UpdateUserPuntuactions from "application/core/UpdateUserPuntuactions";

const useCreatePuntuaction = (
  branchOfficeId: string,
  branchOfficeName: string,
  defaultStars: number,
  closeModal: CallableFunction
) => {
  const [isSendData, setIsSendData] = useState(false);
  const [stars, setStars] = useState<number>(defaultStars);

  const descriptionRef = useRef<HTMLTextAreaElement>();

  const { user, changeUserAuthData } = useAuthContext();
  const { setBranchOfficePuntuaction } = useBranchOfficeContext();

  const changeStarValue = (starNumber) => () => setStars(() => starNumber);

  const onSendPuntuaction = async () => {
    if (!stars) return;

    setIsSendData(() => true);

    const descriptionValue = descriptionRef.current.value.trim();

    const uploadData = await CreatePuntuaction.exec(branchOfficeId, {
      stars,
      userId: user._id,
      description: descriptionValue,
      client: {
        fullName: user.fullName,
        profileImage: user.profileImage.url,
      },
    });

    if (!uploadData) return;

    const puntuactionData = await UpdateUserPuntuactions.exec(user._id, {
      stars,
      branchOfficeId,
      branchOfficeName,
      description: descriptionValue,
    });

    if (!puntuactionData) return;

    const { store, branchOfficeIds } = puntuactionData;

    setBranchOfficePuntuaction(branchOfficeId, uploadData);
    changeUserAuthData({
      ...user,
      puntuaction: { store, branchOfficeIds },
    });

    closeModal();
  };

  return {
    stars,
    isSendData,
    descriptionRef,
    changeStarValue,
    onSendPuntuaction,
  };
};

export default useCreatePuntuaction;
