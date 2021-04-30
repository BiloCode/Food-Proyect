import { FC, memo } from "react";
import * as S from "./styles";

import { GoCloudUpload } from "react-icons/go";

import Spinner from "components/atoms/Spinner";
import UploadIcon from "components/atoms/UploadIcon";
import CircularImage from "components/atoms/CircularImage";

import useProfileImageUpdate from "hooks/useProfileImageUpdate";

type ImageProfileAreaProps = {
  image: string;
  isCurrentUserProfile?: boolean;
};

const ImageProfileArea: FC<ImageProfileAreaProps> = ({
  image,
  isCurrentUserProfile,
}) => {
  const { isUploading, onChangeImage } = useProfileImageUpdate();

  return (
    <S.ImageContainer>
      <S.ImageBorder>
        <CircularImage src={image} type="extra-big" />
      </S.ImageBorder>
      {isUploading && (
        <S.SpinnerContainer>
          <Spinner color="white" size="big" />
        </S.SpinnerContainer>
      )}
      {isCurrentUserProfile && (
        <S.UploadIconContainer>
          {!isUploading && (
            <UploadIcon onChange={onChangeImage} Icon={GoCloudUpload} />
          )}
        </S.UploadIconContainer>
      )}
    </S.ImageContainer>
  );
};

export default memo(ImageProfileArea);
