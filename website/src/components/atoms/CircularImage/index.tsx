import { FC, memo } from "react";
import classnames from "classnames";
import * as S from "./styles";
import Image, { ImageType } from "../Image";

type CircularImageSizeType = "small" | "extra-big" | "big";

type CircularImageProps = ImageType & {
  type?: CircularImageSizeType;
};

const CircularImage: FC<CircularImageProps> = ({ src, alt, type }) => (
  <S.MainContainer
    className={classnames({
      small: type === "small",
      big: type === "big",
      extra_big: type === "extra-big",
    })}
  >
    {src && <Image src={src} alt={alt} />}
  </S.MainContainer>
);

export default memo(CircularImage);
