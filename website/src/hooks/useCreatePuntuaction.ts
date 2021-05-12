import { useRef, useState } from "react";

import CreatePuntuaction from "application/core/CreatePuntuaction";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

const useCreatePuntuaction = (
  branchOfficeId: string,
  defaultStars: number,
  closeModal: CallableFunction
) => {
  const descriptionRef = useRef<HTMLTextAreaElement>();

  const { user } = useAuthContext();
  const { setBranchOfficePuntuaction } = useBranchOfficeContext();

  const [isSendData, setIsSendData] = useState(false);
  const [stars, setStars] = useState<number>(defaultStars);

  const changeStarValue = (starNumber) => () => setStars(() => starNumber);

  const onSendPuntuaction = async () => {
    if (!stars) return;

    setIsSendData(() => true);

    const uploadData = await CreatePuntuaction.exec(branchOfficeId, {
      stars,
      userId: user._id,
      description: descriptionRef.current.value.trim(),
      client: {
        fullName: user.fullName,
        profileImage: user.profileImage.url,
      },
    });

    if (!uploadData) return;

    setBranchOfficePuntuaction(branchOfficeId, uploadData);
    setIsSendData(() => false);
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
