import classnames from "classnames";
import * as S from "./styles";

export type ImageType = {
  src: string;
  alt?: string;
  imageCover?: boolean;
};

const Image = ({ src, alt, imageCover }: ImageType) => {
  return (
    <S.Container
      src={src}
      alt={alt}
      className={classnames({
        image_cover: imageCover,
      })}
    />
  );
};

export default Image;
