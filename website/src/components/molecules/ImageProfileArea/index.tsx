import { ChangeEvent, FC, memo, useState } from "react";
import * as S from "./styles";

import { GoCloudUpload } from "react-icons/go";

// import useUploadProfileImage from "hooks/useUploadProfileImage";

import UploadIcon from "components/atoms/UploadIcon";
import CircularImage from "components/atoms/CircularImage";
import FilesCheckingIsImage from "application/core/FileCheckingIsImage";

type ImageProfileAreaProps = {
  image: string;
  isCurrentUserProfile?: boolean;
};

const ImageProfileArea: FC<ImageProfileAreaProps> = ({
  image,
  isCurrentUserProfile,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileImageLocal, setProfileImageLocal] = useState<string>(image);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files;

    if (!files) return;

    const fileChecker = new FilesCheckingIsImage();
    const imagesUploaded = fileChecker.__invoke(files);

    if (!imagesUploaded.length) return;

    setIsLoading(() => true);
  };

  return (
    <S.ImageContainer>
      <S.ImageBorder>
        <CircularImage src={profileImageLocal} type="extra-big" />
      </S.ImageBorder>
      {isLoading && (
        <S.SpinnerContainer>
          <span>Loading...</span>
        </S.SpinnerContainer>
      )}
      {isCurrentUserProfile && (
        <S.UploadIconContainer>
          {!isLoading && (
            <UploadIcon onChange={onChange} Icon={GoCloudUpload} />
          )}
        </S.UploadIconContainer>
      )}
    </S.ImageContainer>
  );
};

export default memo(ImageProfileArea);
