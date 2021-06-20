import { FC, memo } from "react";
import classnames from "classnames";
import * as S from "./styles";
import Image, { ImageType } from "../Image";

type CircularImageSizeType = "small" | "extra-big" | "big";

type CircularImageProps = ImageType & {
  hoverable?: boolean;
  onClickImage?(): void;
  type?: CircularImageSizeType;
};

const CircularImage: FC<CircularImageProps> = ({
  src,
  hoverable,
  alt,
  type,
}) => (
  <S.MainContainer
    className={classnames({
      hoverable,
      big: type === "big",
      small: type === "small",
      extra_big: type === "extra-big",
    })}
  >
    {src && <Image src={src} alt={alt} imageCover />}
  </S.MainContainer>
);

export default memo(CircularImage);
