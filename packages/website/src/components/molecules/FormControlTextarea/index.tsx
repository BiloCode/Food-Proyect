import { IconType } from "react-icons/lib";
import { forwardRef, memo } from "react";
import * as S from "./styles";

import Icon from "components/atoms/Icon";
import Label from "components/atoms/Label";
import Textarea, { TextareaProps } from "components/atoms/Textarea";
import classNames from "classnames";

type FormControlProps = TextareaProps & {
  icon: IconType;
  size?: "small";
  labelText: string;
};

const FormControlTextarea = forwardRef<HTMLTextAreaElement, FormControlProps>(
  ({ icon, labelText, defaultValue, size }, ref) => (
    <S.MainContainer className={classNames({ small: size === "small" })}>
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

export default memo(FormControlTextarea);
