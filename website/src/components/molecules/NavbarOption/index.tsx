import { FC } from "react";
import * as S from "./styles";
import { IconType } from "react-icons";

import CustomIcon from "components/atoms/Icon";

type NavbarOptionProps = {
  text: string;
  Icon: IconType;
  onClick?(): void;
};

const NavbarOption: FC<NavbarOptionProps> = ({ Icon, text, onClick }) => (
  <S.Container onClick={onClick}>
    <CustomIcon Type={Icon} color="white" />
    <S.TextProvisional>{text}</S.TextProvisional>
    {/* Provicional */}
  </S.Container>
);

export default NavbarOption;
