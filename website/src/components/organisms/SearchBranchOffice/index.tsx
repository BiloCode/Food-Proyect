import InputPlaceholderIcon from "components/molecules/InputPlaceholderIcon";
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";
import { ChangeEvent, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import * as S from "./styles";

const SearchBranchOffice = () => {
  const context = useBranchOfficeContext();

  const searchRef = useRef<HTMLInputElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    context.changeSearch(e.target.value);
  };

  return (
    <S.SearchContainer>
      <InputPlaceholderIcon
        ref={searchRef}
        icon={IoMdSearch}
        text="Escribe un nombre..."
        onChange={onChange}
      />
    </S.SearchContainer>
  );
};

export default SearchBranchOffice;
