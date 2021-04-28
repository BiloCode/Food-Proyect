import * as S from "./styles";

export type ImageType = {
  src: string;
  alt?: string;
};

const Image = (props: ImageType) => {
  return <S.Container src={props.src} />;
};

export default Image;
