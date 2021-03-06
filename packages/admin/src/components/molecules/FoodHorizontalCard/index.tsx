import * as S from "./styles";

import { BsTrash } from "react-icons/bs";
import { RiSendPlane2Line } from "react-icons/ri";

import Image from "components/atoms/Image";
import Icon from "components/atoms/Icon";

type ItemProps = {
  image: string;
  name: string;
  price: number;
  selectIcon?: boolean;
  onClickButton?(): void;
};

const FoodHorizontalCard = ({
  image,
  name,
  price,
  onClickButton,
  selectIcon,
}: ItemProps) => (
  <S.MainContainer type="button">
    <S.ImageContainer>
      <Image src={image} />
    </S.ImageContainer>
    <S.Name>{name}</S.Name>
    <S.Price>S/ {price.toFixed(2)}</S.Price>
    <S.TrashButton type="button" onClick={onClickButton}>
      <Icon type={selectIcon ? RiSendPlane2Line : BsTrash} />
    </S.TrashButton>
  </S.MainContainer>
);

export default FoodHorizontalCard;
