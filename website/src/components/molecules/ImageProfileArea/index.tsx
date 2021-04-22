import { FC, memo, useState } from "react";
import * as S from "./styles";

import { GoCloudUpload } from "react-icons/go";

// import useUploadProfileImage from "hooks/useUploadProfileImage";

import UploadIcon from "components/atoms/UploadIcon";
import CircularImage from "components/atoms/CircularImage";

type ImageProfileAreaProps = {
  image: string;
};

const ImageProfileArea: FC<ImageProfileAreaProps> = ({ image }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileImageLocal, setProfileImageLocal] = useState<string>(image);

  return (
    <S.ImageContainer>
      <S.ImageBorder>
        <CircularImage src={profileImageLocal} type="extra-big" />
      </S.ImageBorder>
      {isLoading && (
        <S.SpinnerContainer>
          <span>loading...</span>
        </S.SpinnerContainer>
      )}
      <S.UploadIconContainer>
        {!isLoading && <UploadIcon Icon={GoCloudUpload} />}
      </S.UploadIconContainer>
    </S.ImageContainer>
  );
};

export default memo(ImageProfileArea);
