import { useNavigate } from "@reach/router";
import Swal from "sweetalert2";
import firebase from "firebase";
import * as S from "./styles";

import SidebarOption from "components/molecules/SidebarOption";
import ApplicationIcon from "components/atoms/ApplicationIcon";

import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineShop,
  AiOutlineApple,
  AiOutlinePoweroff,
} from "react-icons/ai";

import { useAtomValue } from "jotai/utils";
import { foods } from "store/foods";
import { branchOffice } from "store/branchOffice";
import { clients as clientsStore } from "store/clients";
import useShowConfirm from "hooks/useShowConfirm";

const Sidebar = () => {
  const navigate = useNavigate();
  const confirmAction = useShowConfirm();

  const food = useAtomValue(foods);
  const clients = useAtomValue(clientsStore);
  const branchOffices = useAtomValue(branchOffice);

  const onClickToHome = () => navigate("/");
  const onClickToFood = () => navigate("/food");
  const onClickToClients = () => navigate("/clients");
  const onClickToBranchOffice = () => navigate("/branch/list");
  const onClickToExit = async () => {
    const isConfirmed = await confirmAction({
      title: "¿Cerrar Sesión?",
      description: "Tu sesión sera borrada de este navegador.",
      icon: "info",
    });

    if (!isConfirmed) {
      return;
    }

    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.MainContainer>
      <S.ImageContainer>
        <ApplicationIcon />
      </S.ImageContainer>
      <S.ListContainer>
        <S.ListItems>
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
        </S.ListItems>
        <S.ListItems>
          <SidebarOption
            text="Salir"
            icon={AiOutlinePoweroff}
            onClick={onClickToExit}
          />
        </S.ListItems>
      </S.ListContainer>
    </S.MainContainer>
  );
};

export default Sidebar;
