import { FC } from "react";
import * as S from "./styles";
import { IconType } from "react-icons/lib";

import { Icon } from "@food-proyect/shared-components";

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
    <Icon type={IconItem} />
    <span>{text}</span>
  </S.DropdownListElement>
);

export default NavDropdownItem;
