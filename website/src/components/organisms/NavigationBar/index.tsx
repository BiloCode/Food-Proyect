import { useNavigate } from "@reach/router";
import { AiFillHome } from "react-icons/ai";
import { GiFoodTruck } from "react-icons/gi";
import { BsMap } from "react-icons/bs";

import * as S from "./styles";

import Logo from "assets/images/Logo.svg";

import Image from "components/atoms/Image";
import Button from "components/atoms/Button";
import NavUserProfile from "../NavUserProfile";
import NavbarOption from "components/molecules/NavbarOption";

import { useAuthContext } from "context/AuthContext/context";

const NavigationBar = () => {
  const { user } = useAuthContext();
  const navigation = useNavigate();

  const onClickButtonHome = () => navigation("/");
  const onClickButtonLogin = () => navigation("/login");
  const onClickButtonMap = () => navigation("/map");
  const onClickButtonBranchOffices = () => navigation("/branch-office");

  return (
    <S.ContainerNav>
      <div>
        <Image src={Logo} />
      </div>
      <S.ContainerOptions gridFluid={user != null}>
        <S.ListOption>
          <NavbarOption
            Icon={AiFillHome}
            text="Inicio"
            onClick={onClickButtonHome}
          />
          <NavbarOption
            Icon={GiFoodTruck}
            text="Sucursales"
            onClick={onClickButtonBranchOffices}
          />
          <NavbarOption text="Mapa" Icon={BsMap} onClick={onClickButtonMap} />
        </S.ListOption>
        {!user ? (
          <Button
            text="Iniciar Sesión"
            styles={{ color: "yellow" }}
            onClick={onClickButtonLogin}
          />
        ) : (
          <NavUserProfile _id={user._id} profileImage={user.profileImage.url} />
        )}
      </S.ContainerOptions>
    </S.ContainerNav>
  );
};

export default NavigationBar;
