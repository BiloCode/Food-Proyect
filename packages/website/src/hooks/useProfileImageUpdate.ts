import { ChangeEvent, useState } from "react";
import { useToasts } from "react-toast-notifications";

import DeleteImage from "application/core/DeleteImage";
import { FilesCheckingIsImage } from "@food-proyect/shared-functions";
import UploadProfileImage from "application/core/UploadProfileImage";
import UpdateUserProfileImage from "application/core/UpdateUserProfileImage";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";
import UpdateUserDataInPuntuactions from "application/core/puntuaction/UpdateUserDataInPuntuactions";

const useProfileImageUpdate = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const { addToast } = useToasts();
  const { user, changeUserAuthData } = useAuthContext();
  const { currentClientInView, setCurrentProfile } = useProfileContext();

  const onChangeImage = async (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files;
    const imagesUploaded = FilesCheckingIsImage.check(files);

    if (imagesUploaded.length !== 1) return;

    setIsUploading(() => true);

    const newImage = imagesUploaded[0];
    const uploadService = new UploadProfileImage();
    const imageUploaded = await uploadService.__invoke(user?._id, newImage);

    if (!imageUploaded) {
      setIsUploading(() => false);
      return;
    }

    if (user.profileImage.name) {
      const removeOldImage = new DeleteImage();
      await removeOldImage.__invoke(user?.profileImage.name);
    }

    const updateUserProfile = new UpdateUserProfileImage();
    const isUpdated = await updateUserProfile.__invoke(
      user?._id,
      imageUploaded
    );

    if (!isUpdated) {
      addToast("Ocurrio un error al actualizar los datos", {
        appearance: "error",
      });
      return;
    }

    await UpdateUserDataInPuntuactions.exec({
      _id: user._id,
      fullName: user.fullName,
      profileImageUrl: imageUploaded.url,
    });

    setIsUploading(() => false);
    changeUserAuthData({ ...user, profileImage: imageUploaded });
    setCurrentProfile({ ...currentClientInView, profileImage: imageUploaded });
  };

  return {
    onChangeImage,
    isUploading,
  };
};

export default useProfileImageUpdate;
