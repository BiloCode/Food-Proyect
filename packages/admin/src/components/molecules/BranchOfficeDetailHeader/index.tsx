import { memo } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";

type HeaderProps = {
  title: string;
  subtitle: string;
  onClickButton(): void;
};

const BranchOfficeDetailHeader = ({
  title,
  subtitle,
  onClickButton,
}: HeaderProps) => (
  <S.BranchTitleContainer>
    <S.TitleContainer>
      <Title>{title}</Title>
      <Description size="small">{subtitle}</Description>
    </S.TitleContainer>
    <S.ButtonContainer>
      <Button
        text="Eliminar Sucursal"
        onClick={onClickButton}
        styles={{ color: "red", size: "small" }}
      />
    </S.ButtonContainer>
  </S.BranchTitleContainer>
);

export default memo(BranchOfficeDetailHeader);
