import * as S from "./styles";

import HomeFood from "assets/images/HomeFood.png";
import {
  Button,
  Image,
  Title,
  Paragraph,
} from "@food-proyect/shared-components";

const HomeBanner = () => {
  return (
    <S.MainContainer>
      <S.LeftContent>
        <div>
          <Title weight="black" size="e-big" color="blue">
            Bienvenido a Bembos
          </Title>
          <Paragraph size="big">
            Nos encargamos de vender comida rapida en nuestros establecimientos
            mas cercanos a ti, brindamos siempre la mejor calidad en nuestros
            servicios.
          </Paragraph>
        </div>
        <Button styles={{ color: "yellow" }} text="Unete a nosotros ahora" />
      </S.LeftContent>
      <Image src={HomeFood} />
    </S.MainContainer>
  );
};

export default HomeBanner;
