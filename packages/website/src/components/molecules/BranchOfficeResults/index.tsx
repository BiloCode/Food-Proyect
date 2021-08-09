import Description from "components/atoms/Description";
import { Title } from "@food-proyect/shared-components";
import * as S from "./styles";

type BranchOfficeFilterProps = {
  tittle: string;
  results: number;
};

const BranchOfficeResults = ({ tittle, results }: BranchOfficeFilterProps) => {
  return (
    <S.Container>
      <Title color="blue">{tittle}</Title>
      <Description color="light-black" size="small">
        {results} resultados
      </Description>
    </S.Container>
  );
};

export default BranchOfficeResults;
