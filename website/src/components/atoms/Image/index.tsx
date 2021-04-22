import * as S from "./styles";

export type ImageType = {
  src: string;
  alt?: string;
};

const Image = (props: ImageType) => {
  return <S.Image src={props.src} />;
};

export default Image;
