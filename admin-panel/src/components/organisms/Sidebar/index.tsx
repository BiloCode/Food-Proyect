import { useNavigate } from "@reach/router";
import firebase from "firebase";
import * as S from "./styles";

import SidebarOption from "components/molecules/SidebarOption";
import ApplicationIcon from "components/atoms/ApplicationIcon";

import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineShop,
  AiOutlineClose,
  AiOutlineApple,
} from "react-icons/ai";

import { useUpdateAtom } from "jotai/utils";
import { resetUserAuth } from "store/userAuth";

const Sidebar = () => {
  const navigate = useNavigate();
  const resetAuthState = useUpdateAtom(resetUserAuth);

  const onClickToHome = () => navigate("/");
  const onClickToFood = () => navigate("/food");
  const onClickToClients = () => navigate("/clients");
  const onClickToBranchOffice = () => navigate("/branch-office");
  const onClickToExit = async () => {
    const confirm = window.confirm("¿Esta seguro que desea cerrar la sesión?");
    if (!confirm) {
      return;
    }

    try {
      await firebase.auth().signOut();
      resetAuthState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.MainContainer>
      <S.ImageContainer>
        <ApplicationIcon />
      </S.ImageContainer>
      <div>
        <S.ListContainer>
          <SidebarOption
            text="Inicio"
            icon={AiOutlineHome}
            onClick={onClickToHome}
          />
          <SidebarOption
            text="Sucursales"
            icon={AiOutlineShop}
            onClick={onClickToBranchOffice}
            items={{ loading: true, numberOfItems: 10 }}
          />
          <SidebarOption
            icon={AiOutlineTeam}
            text="Clientes"
            onClick={onClickToClients}
            items={{ loading: true, numberOfItems: 99 }}
          />
          <SidebarOption
            icon={AiOutlineApple}
            text="Alimentos"
            onClick={onClickToFood}
            items={{ loading: true, numberOfItems: 100 }}
          />
          <SidebarOption
            text="Salir"
            icon={AiOutlineClose}
            onClick={onClickToExit}
          />
        </S.ListContainer>
      </div>
    </S.MainContainer>
  );
};

export default Sidebar;
