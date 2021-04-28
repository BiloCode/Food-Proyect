import * as S from "./styles";
import Input from "components/atoms/Input";
import Icon from "components/atoms/Icon";
import { IconType } from "react-icons/lib";

type InputPlaceholderIconProps = {
  text: string;
  icon: IconType;
};

const InputPlaceholderIcon = ({ icon, text }: InputPlaceholderIconProps) => {
  return (
    <S.Container>
      <S.IconContainer>
        <Icon Type={icon} size="small-medium" color="gray" />
      </S.IconContainer>
      <S.InputContainer>
        <Input type="text" placeholder={text} />
      </S.InputContainer>
    </S.Container>
  );
};

export default InputPlaceholderIcon;
