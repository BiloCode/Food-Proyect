import { FC } from "react";
import { IconType } from "react-icons";
import * as S from "./styles";

import Input, { InputType } from "components/atoms/Input";
import Label from "components/atoms/Label";
import Icon from "components/atoms/Icon";

type FormControlProps = {
  icon: IconType;
  type?: InputType;
  labelText: string;
  onChange?(): void;
};

const FormControl: FC<FormControlProps> = ({
  type,
  icon,
  onChange,
  labelText,
}) => (
  <S.MainContainer>
    <S.LabelWithIcon>
      <Icon Type={icon} />
      <Label>{labelText}</Label>
    </S.LabelWithIcon>
    <Input type={type} onChange={onChange} />
  </S.MainContainer>
);

export default FormControl;
