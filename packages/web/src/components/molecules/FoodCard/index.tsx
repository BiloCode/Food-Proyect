import * as S from "./styles";
import { Button, CardTemplate, Paragraph, Title } from "@food/components";

type TProps = {
  image: string;
  discount?: number;
  aero?: boolean;
  button?: {
    onClick(): void;
  };
};

const FoodCard = ({ image, aero, discount, button }: TProps) => {
  return (
    <CardTemplate aeroStyle={aero} bigImage image={image}>
      <S.Text>
        <Title lowercase size="small">
          #Comida para pequeños
        </Title>
        <Paragraph size="s-medium">
          Lleva ahora y disfruta de esta gran comida para tus prequeños
        </Paragraph>
      </S.Text>
      <S.PriceContainer>
        <S.PriceContent>
          <S.Price>S/ 100.00</S.Price>
          {discount && <S.PriceOld>{discount.toFixed(2)}</S.PriceOld>}
        </S.PriceContent>
      </S.PriceContainer>
      {button && <Button ghost text="Ir a la Sucursal" />}
    </CardTemplate>
  );
};

export default FoodCard;
