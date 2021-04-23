import firebase from "firebase";
import { FC, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLocation, useNavigate } from "@reach/router";
import * as S from "./styles";

import { BiUser, BiDoorOpen } from "react-icons/bi";

import Icon from "components/atoms/Icon";
import CircularImage from "components/atoms/CircularImage";
import NavDropdownItem from "components/molecules/NavDropdownItem";
import useActive from "hooks/useActive";

type NavUserProfileProps = {
  _id: string;
  profileImage: string;
};

const NavUserProfile: FC<NavUserProfileProps> = ({ _id, profileImage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { active, toggleActive } = useActive();

  const logOut = () => firebase.auth().signOut();
  const navigateToProfile = () => {
    if (location.pathname.split("/").includes("user")) {
      toggleActive();
      return;
    }

    navigate(`/user/${_id}`);
  };

  return (
    <S.MainContainer>
      <S.ImageContainer onClick={toggleActive}>
        <CircularImage src={profileImage} />
        <Icon color="white" Type={FiChevronDown} />
      </S.ImageContainer>
      {active && (
        <S.DropdownList>
          <NavDropdownItem
            text="Mi Perfil"
            IconItem={BiUser}
            onClick={navigateToProfile}
          />
          <NavDropdownItem
            onClick={logOut}
            text="Cerrar Sesión"
            IconItem={BiDoorOpen}
          />
        </S.DropdownList>
      )}
    </S.MainContainer>
  );
};

export default NavUserProfile;
