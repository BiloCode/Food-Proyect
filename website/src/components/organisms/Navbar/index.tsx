import { AiFillHome } from "react-icons/ai";
import { GiFoodTruck } from "react-icons/gi";
import * as S from "./styles";

import Logo from "assets/images/Logo.svg";

import Image from "components/atoms/Image";
import Button from "components/atoms/Button";
import NavbarOption from "components/molecules/NavbarOption";

const Navbar = () => (
  <S.ContainerNav>
    <div>
      <Image src={Logo} />
    </div>
    <S.ContainerOptions>
      <S.ListOption>
        <NavbarOption Icon={AiFillHome} text="Inicio" />
        <NavbarOption Icon={GiFoodTruck} text="Sucursales" />
      </S.ListOption>
      <Button color="yellow" text="Iniciar Sesión" />
    </S.ContainerOptions>
  </S.ContainerNav>
);

export default Navbar;
