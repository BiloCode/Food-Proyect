import { forwardRef, memo } from "react";
import { IconType } from "react-icons";
import * as S from "./styles";

import Label from "components/atoms/Label";
import Input, { InputProps } from "components/atoms/Input";

import { Icon } from "@food-proyect/shared-components";

type FormControlProps = InputProps & {
  icon: IconType;
  labelText: string;
};

const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  (props, ref) => (
    <S.MainContainer>
      <S.LabelWithIcon>
        <Icon type={props.icon} />
        <Label>{props.labelText}</Label>
      </S.LabelWithIcon>
      <Input
        ref={ref}
        id={props.id}
        type={props.type}
        required={props.required}
        maxLength={props.maxLength}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </S.MainContainer>
  )
);

export default memo(FormControl);
