import { FC, memo } from "react";
import classNames from "classnames";
import { useNavigate } from "@reach/router";

import { AiFillHome } from "react-icons/ai";
import { GiFoodTruck } from "react-icons/gi";
import { BsMap } from "react-icons/bs";

import * as S from "./styles";

import Logo from "assets/images/Logo.svg";

import NavUserProfile from "../NavUserProfile";
import NavbarOption from "components/molecules/NavbarOption";

import { Button, Image } from "@food-proyect/shared-components";

import { useAuthContext } from "context/AuthContext/context";

type NavigationBarProps = {
  staticPosition?: boolean;
};

const NavigationBar: FC<NavigationBarProps> = ({ staticPosition }) => {
  const { user } = useAuthContext();
  const navigation = useNavigate();

  const onClickButtonHome = () => navigation("/");
  const onClickButtonLogin = () => navigation("/login");
  const onClickButtonMap = () => navigation("/map");
  const onClickButtonBranchOffices = () => navigation("/branch-office");

  return (
    <S.ContainerNav className={classNames({ static: staticPosition })}>
      <S.LogoContainer onClick={onClickButtonHome}>
        <Image src={Logo} />
      </S.LogoContainer>
      <S.ContainerOptions gridFluid={user != null}>
        <S.ListOption>
          <NavbarOption
            icon={AiFillHome}
            text="Inicio"
            onClick={onClickButtonHome}
          />
          <NavbarOption
            icon={GiFoodTruck}
            text="Sucursales"
            onClick={onClickButtonBranchOffices}
          />
          <NavbarOption text="Mapa" icon={BsMap} onClick={onClickButtonMap} />
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

export default memo(NavigationBar);
