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

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { resetUserAuth } from "store/userAuth";
import { clientStore } from "store/clientStore";
import { branchOfficeStore } from "store/branchOfficeStore";
import { foodStore } from "store/foodStore";

const Sidebar = () => {
  const navigate = useNavigate();

  const food = useAtomValue(foodStore);
  const clients = useAtomValue(clientStore);
  const branchOffices = useAtomValue(branchOfficeStore);
  const resetAuthState = useUpdateAtom(resetUserAuth);

  const onClickToHome = () => navigate("/");
  const onClickToFood = () => navigate("/food");
  const onClickToClients = () => navigate("/clients");
  const onClickToBranchOffice = () => navigate("/branch-offices");
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
            items={{
              bgColor: "yellow",
              numberOfItems: branchOffices.data.length,
              loading: branchOffices.requestState === "loading",
            }}
          />
          <SidebarOption
            icon={AiOutlineTeam}
            text="Clientes"
            onClick={onClickToClients}
            items={{
              numberOfItems: clients.data.length,
              loading: clients.requestState === "loading",
            }}
          />
          <SidebarOption
            icon={AiOutlineApple}
            text="Comestibles"
            onClick={onClickToFood}
            items={{
              bgColor: "red",
              numberOfItems: food.data.length,
              loading: food.requestState === "loading",
            }}
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
