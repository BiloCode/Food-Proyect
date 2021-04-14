import Button from "components/atoms/Button";
import TitleWithDescription from "components/molecules/TitleWithDescription";
import * as S from "./styles";

const HomeSearch = () => {
  return (
    <S.HomeSearch>
      <TitleWithDescription
        textTittle="Busca nuestra sucursal mas cercana"
        tittle={{ color: "black", size: "large" }}
        textDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        description={{ color: "black" }}
        orientation="center"
      />
      <S.HomeSearchButtons>
        <Button text="Buscar Sucursal" color="normal" />
        <Button text="Ver Mapa" color="yellow" />
      </S.HomeSearchButtons>
    </S.HomeSearch>
  );
};

export default HomeSearch;
