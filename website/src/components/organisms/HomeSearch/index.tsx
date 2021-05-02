import { useNavigate } from "@reach/router";
import * as S from "./styles";

import Button from "components/atoms/Button";
import HomeTitleWithDescription from "components/molecules/HomeTitleWithDescription";

const HomeSearch = () => {
  const navigate = useNavigate();
  const navigateTo = (path: string) => () => navigate("/" + path);

  return (
    <S.HomeSearch>
      <HomeTitleWithDescription
        orientation="center"
        title="Busca nuestra sucursal mas cercana"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <S.HomeSearchButtons>
        <Button text="Buscar Sucursal" onClick={navigateTo("branch-office")} />
        <Button
          text="Ver Mapa"
          onClick={navigateTo("map")}
          styles={{ color: "yellow" }}
        />
      </S.HomeSearchButtons>
    </S.HomeSearch>
  );
};

export default HomeSearch;
