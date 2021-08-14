import { FC } from "react";
import * as S from "./styles";

import Image from "../../atoms/Image";
import classNames from "classnames";

type TProps = {
  image: string;
  bigImage?: boolean;
  aeroStyle?: boolean;
};

const CardTemplate: FC<TProps> = ({ image, bigImage, children, aeroStyle }) => (
  <S.MainContainer className={classNames({ aero: aeroStyle })}>
    <S.ImageContainer className={classNames({ big: bigImage })}>
      <Image src={image} imageCover />
    </S.ImageContainer>
    <S.BranchOfficeDataContainer>{children}</S.BranchOfficeDataContainer>
  </S.MainContainer>
);

export default CardTemplate;
