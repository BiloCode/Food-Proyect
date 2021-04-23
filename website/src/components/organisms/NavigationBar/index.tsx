import { useNavigate } from "@reach/router";
import { AiFillHome } from "react-icons/ai";
import { GiFoodTruck } from "react-icons/gi";
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
        </S.ListOption>
        {!user ? (
          <Button
            color="yellow"
            text="Iniciar Sesión"
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
