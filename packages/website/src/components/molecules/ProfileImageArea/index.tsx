import { FC, memo } from "react";
import * as S from "./styles";

import { GoCloudUpload } from "react-icons/go";

import UploadIcon from "components/atoms/UploadIcon";
import { Spinner } from "@food-proyect/shared-components";
import CircularImage from "components/atoms/CircularImage";

import useProfileImageUpdate from "hooks/useProfileImageUpdate";
import useDefaultProfileImage from "hooks/useDefaultProfileImage";

type ProfileImageAreaProps = {
  image: string;
  isCurrentUserProfile?: boolean;
};

const ProfileImageArea: FC<ProfileImageAreaProps> = ({
  image,
  isCurrentUserProfile,
}) => {
  const { defaultImage } = useDefaultProfileImage();
  const { isUploading, onChangeImage } = useProfileImageUpdate();

  return (
    <S.ImageContainer>
      <S.ImageBorder>
        <CircularImage src={image || defaultImage} type="extra-big" />
      </S.ImageBorder>
      {isUploading && (
        <S.SpinnerContainer>
          <Spinner color="white" size="big" />
        </S.SpinnerContainer>
      )}
      {isCurrentUserProfile && (
        <S.UploadIconContainer>
          {!isUploading && (
            <UploadIcon onChange={onChangeImage} icon={GoCloudUpload} />
          )}
        </S.UploadIconContainer>
      )}
    </S.ImageContainer>
  );
};

export default memo(ProfileImageArea);
