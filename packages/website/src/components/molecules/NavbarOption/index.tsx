import { FC } from "react";
import * as S from "./styles";
import { IconType } from "react-icons";

import { Icon, Title } from "@food-proyect/shared-components";

type NavigationBarOptionProps = {
  text: string;
  icon: IconType;
  onClick?(): void;
};

const NavigationBarOption: FC<NavigationBarOptionProps> = ({
  icon,
  text,
  onClick,
}) => (
  <S.Container onClick={onClick}>
    <Icon type={icon} color="white" />
    <Title size="small">{text}</Title>
  </S.Container>
);

export default NavigationBarOption;
