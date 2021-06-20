import firebase from "firebase";
import { FC } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "@reach/router";
import * as S from "./styles";

import { BiUser, BiDoorOpen } from "react-icons/bi";

import Icon from "components/atoms/Icon";
import CircularImage from "components/atoms/CircularImage";
import NavDropdownItem from "components/molecules/NavDropdownItem";
import useActive from "hooks/useActive";
import useDefaultProfileImage from "hooks/useDefaultProfileImage";

type NavUserProfileProps = {
  _id: string;
  profileImage: string;
};

const NavUserProfile: FC<NavUserProfileProps> = ({ _id, profileImage }) => {
  const navigate = useNavigate();

  const { defaultImage } = useDefaultProfileImage();
  const { active, toggleActive } = useActive();

  const closeSession = () => firebase.auth().signOut();
  const navigateToProfile = () => {
    toggleActive();
    navigate(`/user/${_id}`);
  };

  return (
    <S.MainContainer>
      <S.ImageContainer onClick={toggleActive}>
        <CircularImage src={profileImage || defaultImage} />
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
            onClick={closeSession}
            text="Cerrar Sesión"
            IconItem={BiDoorOpen}
          />
        </S.DropdownList>
      )}
    </S.MainContainer>
  );
};

export default NavUserProfile;
