import * as S from "./styles";

import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

import BranchOfficeResults from "components/molecules/BranchOfficeResults";
import BranchOfficeSelect from "components/molecules/BranchOfficeSelect";

type optionType = "All" | "vegetarian" | "carnivorous" | "mix";

type BranchOfficeFilterProps = {
  onClickOption(option: optionType): void;
};

const BranchOfficeFilter = ({ onClickOption }: BranchOfficeFilterProps) => {
  const { branchOffices } = useBranchOfficeContext();

  return (
    <S.Container>
      <BranchOfficeResults
        tittle="Todas las sucursales"
        results={branchOffices.length}
      />
      <BranchOfficeSelect onClickOption={onClickOption} />
    </S.Container>
  );
};

export default BranchOfficeFilter;
