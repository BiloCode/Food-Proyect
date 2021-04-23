import { FC } from "react";
import * as S from "./styles";
import { IconType } from "react-icons/lib";

import Icon from "components/atoms/Icon";

type NavDropdownItemProps = {
  text: string;
  IconItem: IconType;
  onClick?(): void;
};

const NavDropdownItem: FC<NavDropdownItemProps> = ({
  text,
  onClick,
  IconItem,
}) => (
  <S.DropdownListElement onClick={onClick}>
    <Icon Type={IconItem} />
    <span>{text}</span>
  </S.DropdownListElement>
);

export default NavDropdownItem;
