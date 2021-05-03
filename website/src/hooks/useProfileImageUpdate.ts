import { ChangeEvent, useState } from "react";

import DeleteImage from "application/core/DeleteImage";
import FilesCheckingIsImage from "application/core/FileCheckingIsImage";
import UploadProfileImage from "application/core/UploadProfileImage";
import UpdateUserProfileImage from "application/core/UpdateUserProfileImage";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";

const useProfileImageUpdate = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const { user, changeUserAuthData } = useAuthContext();
  const { currentClientInView, setCurrentProfile } = useProfileContext();

  const onChangeImage = async (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files;
    const imagesUploaded = FilesCheckingIsImage.check(files);

    if (imagesUploaded.length !== 1) return;

    setIsUploading(() => true);

    if (!user) return;

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

    if (!isUpdated) return;

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
