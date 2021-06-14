import * as S from "./styles";

import Image from "components/atoms/Image";

type ItemProps = {
  image: string;
  name: string;
  price: number;
  onClick?(): void;
};

const ModalFoodItemList = ({ image, name, onClick, price }: ItemProps) => (
  <S.MainContainer type="button" onClick={onClick}>
    <S.ImageContainer>
      <Image src={image} />
    </S.ImageContainer>
    <S.Name>{name}</S.Name>
    <S.Price>S/ {price.toFixed(2)}</S.Price>
  </S.MainContainer>
);

export default ModalFoodItemList;
