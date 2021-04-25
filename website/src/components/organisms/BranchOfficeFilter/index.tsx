import BranchOfficeResults from "components/molecules/BranchOfficeResults";
import BranchOfficeSelect from "components/molecules/BranchOfficeSelect";
import * as S from "./styles";

const BranchOfficeFilter = () => {
  return (
    <S.Container>
      <BranchOfficeResults tittle="Todas las sucursales" results={25} />
      <BranchOfficeSelect />
    </S.Container>
  );
};

export default BranchOfficeFilter;
