import { FC } from "react";
import * as S from "./styles";

import { AiFillCalendar } from "react-icons/ai";

import Icon from "components/atoms/Icon";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import ProfileUpdateModal from "../ProfileUpdateModal";
import Description from "components/atoms/Description";
import ImageProfileArea from "components/molecules/ImageProfileArea";

import useActive from "hooks/useActive";

type ProfileLeftContentProps = {
  fullName: string;
  createdAt: string;
  description: string;
  profileImage: string;
  isCurrentUserProfile: boolean;
};

const ProfileLeftContent: FC<ProfileLeftContentProps> = ({
  fullName,
  createdAt,
  description,
  profileImage,
  isCurrentUserProfile,
}) => {
  const { toggleActive, active } = useActive();

  return (
    <S.MainContainer>
      <S.UserAreaContainer>
        <ImageProfileArea
          image={profileImage}
          isCurrentUserProfile={isCurrentUserProfile}
        />
        <S.UserAreaTextContainer>
          <Title size="medium" color="black">
            # {fullName}
          </Title>
          <Description size="medium">
            <div
              dangerouslySetInnerHTML={{
                __html: description || "Sin descripcion disponible...",
              }}
            />
          </Description>
        </S.UserAreaTextContainer>
        <S.UserAreaDateContainer>
          <Icon color="blue" size="small" Type={AiFillCalendar} />
          <S.UserAreaDateText>Se unio el {createdAt}</S.UserAreaDateText>
        </S.UserAreaDateContainer>
      </S.UserAreaContainer>
      <Button text="Actualizar Informacion" onClick={toggleActive} />
      {active && (
        <Portals>
          <ProfileUpdateModal
            fullName={fullName}
            description={description}
            onClose={toggleActive}
          />
        </Portals>
      )}
    </S.MainContainer>
  );
};

export default ProfileLeftContent;
