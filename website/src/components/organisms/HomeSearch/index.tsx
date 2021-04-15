import * as S from "./styles";

import Button from "components/atoms/Button";
import HomeTitleWithDescription from "components/molecules/HomeTitleWithDescription";

const HomeSearch = () => {
  return (
    <S.HomeSearch>
      <HomeTitleWithDescription
        orientation="center"
        title="Busca nuestra sucursal mas cercana"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <S.HomeSearchButtons>
        <Button text="Buscar Sucursal" color="normal" />
        <Button text="Ver Mapa" color="yellow" />
      </S.HomeSearchButtons>
    </S.HomeSearch>
  );
};

export default HomeSearch;
