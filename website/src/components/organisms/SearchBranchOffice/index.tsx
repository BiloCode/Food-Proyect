import { IoMdSearch } from "react-icons/io";
import * as S from "./styles";

import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";

type SearchBranchOfficeProps = {
  onChange(): void;
};

const SearchBranchOffice = ({ onChange }: SearchBranchOfficeProps) => {
  return (
    <S.SearchContainer>
      <InputPlaceholderIcon
        icon={IoMdSearch}
        text="Escribe un nombre..."
        onChange={onChange}
      />
    </S.SearchContainer>
  );
};

export default SearchBranchOffice;
