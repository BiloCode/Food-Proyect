import { FormEvent, useRef } from "react";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";

import UpdateUserInformation from "application/core/UpdateUserInformation";

const useProfileUpdateInformation = (onClose) => {
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

    const updateService = new UpdateUserInformation();
    const isUpdated = await updateService.__invoke({
      _id: user._id,
      fullName,
      description,
    });

    if (!isUpdated) {
      return;
    }

    changeUserAuthData({ ...user, fullName, description });
    setCurrentProfile({ ...currentClientInView, fullName, description });
    onClose();
  };

  return {
    onSubmit,
    fullnameRef,
    descriptionRef,
  };
};

export default useProfileUpdateInformation;
