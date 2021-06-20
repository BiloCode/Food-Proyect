import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import * as S from "./styles";

const NoSearchResults = () => {
  return (
    <S.Container>
      <Title color="black" lowercase size="small-medium">
        SIN RESULTADOS
      </Title>
      <Description size="medium" color="black">
        No se ha podido encontrar resultados para esta busqueda
      </Description>
    </S.Container>
  );
};

export default NoSearchResults;
