import classnames from "classnames";
import * as S from "./styles";

type ParallaxImageProps = {
  src: string;
  styles?: {
    size?: "small";
  };
};

const ParallaxImage = ({ src, styles }: ParallaxImageProps) => (
  <S.ImageContainer
    backgroundUrl={src}
    className={classnames({
      small: styles?.size === "small",
    })}
  />
);

export default ParallaxImage;
