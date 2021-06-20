import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import * as S from "./styles";

type BranchOfficeFilterProps = {
  tittle: string;
  results: number;
};

const BranchOfficeResults = ({ tittle, results }: BranchOfficeFilterProps) => {
  return (
    <S.Container>
      <Title color="blue" size="medium" lowercase>
        {tittle}
      </Title>
      <Description color="light-black" size="small">
        {results} resultados
      </Description>
    </S.Container>
  );
};

export default BranchOfficeResults;
