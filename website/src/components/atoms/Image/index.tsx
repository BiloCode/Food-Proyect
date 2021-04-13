import * as S from "./styles";
import { ImageType } from "./types";

const Image = (props: ImageType) => {
  return <S.Image src={props.src} />;
};

export default Image;
