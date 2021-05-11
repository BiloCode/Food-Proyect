import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import { ChangeEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import * as S from "./styles";

type SearchBranchOfficeProps = {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
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
