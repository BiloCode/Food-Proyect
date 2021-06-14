import * as S from "./styles";

import Title from "components/atoms/Title";
import Image from "components/atoms/Image";
import Description from "components/atoms/Description";
import EatableCard from "components/atoms/EatableCard";
import Button from "components/atoms/Button";

const FoodMenuCard = () => (
  <EatableCard
    imageRender={() => (
      <S.ImageContainer>
        <Image
          imageCover
          src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/hamburguesa-2028707.jpg"
        />
      </S.ImageContainer>
    )}
    textRender={() => (
      <S.InformationContainer>
        <S.TextContainer>
          <Title size="small-medium">Compo Papas + Hamburgesa</Title>
          <S.PriceText>S/ 32.20</S.PriceText>
          <Description size="small">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </Description>
        </S.TextContainer>
        <Button text="Editar Comida" styles={{ color: "yellow" }} />
      </S.InformationContainer>
    )}
  />
);

export default FoodMenuCard;
