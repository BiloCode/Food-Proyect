import { IconType } from "react-icons/lib";
import { forwardRef } from "react";
import * as S from "./styles";

import Icon from "components/atoms/Icon";
import Label from "components/atoms/Label";
import Textarea, { TextareaProps } from "components/atoms/Textarea";

type FormControlProps = TextareaProps & {
  icon: IconType;
  labelText: string;
};

const FormControlTextarea = forwardRef<HTMLTextAreaElement, FormControlProps>(
  ({ icon, labelText, defaultValue }, ref) => (
    <S.MainContainer>
      <S.LabelWithIcon>
        <Icon Type={icon} />
        <Label>{labelText}</Label>
      </S.LabelWithIcon>
      <S.TextareaContainer>
        <Textarea ref={ref} defaultValue={defaultValue} />
      </S.TextareaContainer>
    </S.MainContainer>
  )
);

export default FormControlTextarea;
