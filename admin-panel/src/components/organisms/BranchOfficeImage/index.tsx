import * as S from "./styles";

import { AiOutlineLeft } from "react-icons/ai";

import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";
import StarListPuntuaction from "components/molecules/StarListPuntuaction";

type BranchProps = {
  image: string;
  stars: number;
  onClickBack(): void;
};

const BranchOfficeImage = ({ image, onClickBack, stars }: BranchProps) => (
  <S.ImageContainer>
    <Image src={image} imageCover />
    <S.FloatingContainer>
      <S.BackIcon onClick={onClickBack}>
        <Icon type={AiOutlineLeft} color="white" size="medium" />
      </S.BackIcon>
      <StarListPuntuaction iconColor="white" iconSize="medium" stars={stars} />
    </S.FloatingContainer>
  </S.ImageContainer>
);

export default BranchOfficeImage;
