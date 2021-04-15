import { FC } from "react";
import * as S from "./styles";
import { IconType } from "react-icons";

import CustomIcon from "components/atoms/Icon";
import Title from "components/atoms/Title";

type NavigationBarOptionProps = {
  text: string;
  Icon: IconType;
  onClick?(): void;
};

const NavigationBarOption: FC<NavigationBarOptionProps> = ({
  Icon,
  text,
  onClick,
}) => (
  <S.Container onClick={onClick}>
    <CustomIcon Type={Icon} color="white" />
    <Title color="white" size="small">
      {text}
    </Title>
  </S.Container>
);

export default NavigationBarOption;
