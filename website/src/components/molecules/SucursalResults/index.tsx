import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import * as S from "./styles";

type SucursalFilterProps = {
  tittle: string;
  results: number;
};

const SucursalResults = ({ tittle, results }: SucursalFilterProps) => {
  return (
    <S.SucursalFilterContainer>
      <Title color="blue" size="medium" lowercase>
        {tittle}
      </Title>
      <Description color="light-black" size="small">
        {results} resultados
      </Description>
    </S.SucursalFilterContainer>
  );
};

export default SucursalResults;
