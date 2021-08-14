import * as S from "./styles";
import InputPlaceholderIcon from "../InputPlaceholderIcon";
import { IoMdSearch } from "react-icons/io";

const SearchBranchOffice = () => {
  return (
    <S.Container>
      <InputPlaceholderIcon icon={IoMdSearch} text="Escribe un nombre..." />
    </S.Container>
  );
};
