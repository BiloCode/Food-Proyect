import { FormEvent, useRef, useState } from "react";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";

import UpdateUserInformation from "application/core/UpdateUserInformation";
import UpdateUserDataInPuntuactions from "application/core/UpdateUserDataInPuntuactions";

const useProfileUpdateInformation = (onClose) => {
  const [isSendData, setIsSendData] = useState<boolean>(false);

  const fullnameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();

  const { user, changeUserAuthData } = useAuthContext();
  const { currentClientInView, setCurrentProfile } = useProfileContext();

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    if (!user) return;

    const fullName = fullnameRef.current.value.trim();

    let description = descriptionRef.current.value;
    description = description.replaceAll(/\n/g, "<br>");
    description = description.trim();

    if (!fullName || !description) {
      return;
    }

    setIsSendData(() => true);

    const updateService = new UpdateUserInformation();
    const isUpdated = await updateService.__invoke({
      _id: user._id,
      fullName,
      description,
    });

    if (!isUpdated) {
      return;
    }

    await UpdateUserDataInPuntuactions.exec({
      _id: user._id,
      fullName,
      profileImageUrl: user.profileImage.url,
    });

    changeUserAuthData({ ...user, fullName, description });
    setCurrentProfile({ ...currentClientInView, fullName, description });
    onClose();
  };

  return {
    onSubmit,
    fullnameRef,
    descriptionRef,
    isSendData,
  };
};

export default useProfileUpdateInformation;
