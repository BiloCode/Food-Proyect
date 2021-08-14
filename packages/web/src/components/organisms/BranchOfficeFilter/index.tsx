import * as S from "./styles";

import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

import TitleWithSubtitle from "components/molecules/TitleWithSubtitle";
import BranchOfficeSelect from "components/molecules/BranchOfficeSelect";

type optionType = "All" | "vegetarian" | "carnivorous" | "mix";
type BranchOfficeFilterProps = {
  onClickOption(option: optionType): void;
};

const BranchOfficeFilter = ({ onClickOption }: BranchOfficeFilterProps) => {
  const { branchOffices } = useBranchOfficeContext();

  return (
    <S.Container>
      <TitleWithSubtitle
        title="Todas las sucursales"
        subtitle={`${branchOffices.length} resultados`}
      />
      <BranchOfficeSelect onClickOption={onClickOption} />
    </S.Container>
  );
};

export default BranchOfficeFilter;
