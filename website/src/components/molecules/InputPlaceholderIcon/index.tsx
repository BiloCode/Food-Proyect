import * as S from "./styles";
import Input from "components/atoms/Input";
import Icon from "components/atoms/Icon";
import { IconType } from "react-icons/lib";
import { ChangeEvent, forwardRef } from "react";

type InputPlaceholderIconProps = {
  text: string;
  icon: IconType;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
};

const InputPlaceholderIcon = forwardRef<
  HTMLInputElement,
  InputPlaceholderIconProps
>(({ icon, text, onChange }, ref) => (
  <S.Container>
    <S.IconContainer>
      <Icon Type={icon} size="small-medium" color="gray" />
    </S.IconContainer>
    <S.InputContainer>
      <Input ref={ref} type="text" placeholder={text} onChange={onChange} />
    </S.InputContainer>
  </S.Container>
));

export default InputPlaceholderIcon;
