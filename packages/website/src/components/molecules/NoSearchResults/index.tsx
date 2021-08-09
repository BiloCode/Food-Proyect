import Description from "components/atoms/Description";
import { Title } from "@food-proyect/shared-components";
import * as S from "./styles";

const NoSearchResults = () => {
  return (
    <S.Container>
      <Title size="small-medium">SIN RESULTADOS</Title>
      <Description size="medium" color="black">
        No se ha podido encontrar resultados para esta busqueda
      </Description>
    </S.Container>
  );
};

export default NoSearchResults;
