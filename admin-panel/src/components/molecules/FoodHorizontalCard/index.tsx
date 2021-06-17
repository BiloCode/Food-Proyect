import * as S from "./styles";

import { BsTrash } from "react-icons/bs";

import Image from "components/atoms/Image";
import Icon from "components/atoms/Icon";

type ItemProps = {
  image: string;
  name: string;
  price: number;
  onClickButton?(): void;
};

const FoodHorizontalCard = ({
  image,
  name,
  price,
  onClickButton,
}: ItemProps) => (
  <S.MainContainer type="button">
    <S.ImageContainer>
      <Image src={image} />
    </S.ImageContainer>
    <S.Name>{name}</S.Name>
    <S.Price>S/ {price.toFixed(2)}</S.Price>
    <S.TrashButton type="button" onClick={onClickButton}>
      <Icon type={BsTrash} />
    </S.TrashButton>
  </S.MainContainer>
);

export default FoodHorizontalCard;
