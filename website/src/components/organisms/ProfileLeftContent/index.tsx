import { FC } from "react";
import * as S from "./styles";

import { AiFillCalendar } from "react-icons/ai";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import ImageProfileArea from "components/molecules/ImageProfileArea";
import Icon from "components/atoms/Icon";

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
}) => (
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
        <S.TextLimiter>
          <Description size="medium">
            {description ? description : "Sin descripcion disponible..."}
          </Description>
        </S.TextLimiter>
      </S.UserAreaTextContainer>
      <S.UserAreaDateContainer>
        <Icon color="blue" size="small" Type={AiFillCalendar} />
        <S.UserAreaDateText>Se unio el {createdAt}</S.UserAreaDateText>
      </S.UserAreaDateContainer>
    </S.UserAreaContainer>
    <Button text="Actualizar Informacion" />
  </S.MainContainer>
);

export default ProfileLeftContent;
