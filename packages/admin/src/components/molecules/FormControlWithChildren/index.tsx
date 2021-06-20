import * as S from "./styles";

import { FC } from "react";
import { IconType } from "react-icons";

import Label from "components/atoms/Label";
import Icon from "components/atoms/Icon";

type FormControlWithChildrenProps = {
  icon: IconType;
  labelText: string;
};

const FormControlWithChildren: FC<FormControlWithChildrenProps> = ({
  children,
  icon,
  labelText,
}) => (
  <S.MainContainer>
    <S.LabelWithIcon>
      <Icon type={icon} />
      <Label>{labelText}</Label>
    </S.LabelWithIcon>
    {children}
  </S.MainContainer>
);

export default FormControlWithChildren;
