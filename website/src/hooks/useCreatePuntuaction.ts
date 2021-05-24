import { useRef, useState } from "react";

import firebase from "firebase";

import CreatePuntuaction from "application/core/puntuaction/CreatePuntuaction";

import { useAuthContext } from "context/AuthContext/context";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import { useToasts } from "react-toast-notifications";

const useCreatePuntuaction = (
  branchOfficeId: string,
  defaultStars: number,
  closeModal: CallableFunction
) => {
  const descriptionRef = useRef<HTMLTextAreaElement>();

  const [isSendData, setIsSendData] = useState(false);
  const [stars, setStars] = useState<number>(defaultStars);

  const { addToast } = useToasts();
  const { user, changeUserAuthData } = useAuthContext();
  const { setBranchOfficePuntuaction } = useBranchOfficeContext();

  const changeStarValue = (starNumber) => () => setStars(() => starNumber);

  const onSendPuntuaction = async () => {
    if (!stars) return;

    setIsSendData(() => true);

    const userId = user._id;
    const descriptionValue = descriptionRef.current.value.trim();

    const uploadPuntuaction = await CreatePuntuaction.exec(
      branchOfficeId,
      userId,
      {
        stars,
        userId,
        description: descriptionValue || "",
        createdAt: firebase.firestore.Timestamp.now(),
        client: {
          fullName: user.fullName,
          profileImage: user.profileImage.url,
        },
      }
    );

    if (!uploadPuntuaction) {
      addToast("Ocurrio un error al crear la puntuacion.", {
        appearance: "error",
      });
      return;
    }

    setBranchOfficePuntuaction(branchOfficeId, uploadPuntuaction.branchData);
    changeUserAuthData({
      ...user,
      puntuaction: uploadPuntuaction.userPuntuaction,
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
