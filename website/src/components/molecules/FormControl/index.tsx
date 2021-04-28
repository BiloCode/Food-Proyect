import { forwardRef } from "react";
import { IconType } from "react-icons";
import * as S from "./styles";

import Label from "components/atoms/Label";
import Icon from "components/atoms/Icon";
import Input, { InputProps } from "components/atoms/Input";

type FormControlProps = InputProps & {
  icon: IconType;
  labelText: string;
};

const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  ({ type, icon, labelText, defaultValue }, ref) => (
    <S.MainContainer>
      <S.LabelWithIcon>
        <Icon Type={icon} />
        <Label>{labelText}</Label>
      </S.LabelWithIcon>
      <Input ref={ref} type={type} defaultValue={defaultValue} />
    </S.MainContainer>
  )
);

export default FormControl;
