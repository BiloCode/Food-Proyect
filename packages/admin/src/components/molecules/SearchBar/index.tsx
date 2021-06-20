import { ChangeEvent, forwardRef, memo } from "react";
import * as S from "./styles";

import { IoMdSearch } from "react-icons/io";

import Input from "components/atoms/Input";
import Icon from "components/atoms/Icon";

type SearchBarProps = {
  placeholder: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
};

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ placeholder, onChange }, ref) => {
    return (
      <S.Container>
        <S.IconContainer>
          <Icon type={IoMdSearch} size="small-medium" color="gray" />
        </S.IconContainer>
        <S.InputContainer>
          <Input
            ref={ref}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
          />
        </S.InputContainer>
      </S.Container>
    );
  }
);

export default memo(SearchBar);
