import BranchOfficeResults from "components/molecules/BranchOfficeResults";
import BranchOfficeSelect from "components/molecules/BranchOfficeSelect";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import * as S from "./styles";

const BranchOfficeFilter = () => {
  const { branchOffices } = useBranchOfficeContext();

  return (
    <S.Container>
      <BranchOfficeResults
        tittle="Todas las sucursales"
        results={branchOffices.length}
      />
      <BranchOfficeSelect />
    </S.Container>
  );
};

export default BranchOfficeFilter;
