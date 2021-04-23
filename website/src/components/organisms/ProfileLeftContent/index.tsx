import { FC } from "react";
import * as S from "./styles";
import faker from "faker";

import { useParams } from "@reach/router";

import { AiFillCalendar } from "react-icons/ai";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import ImageProfileArea from "components/molecules/ImageProfileArea";
import Icon from "components/atoms/Icon";

type ProfileLeftContentProps = {
  isUserProfile: boolean;
  fullName: string;
  profileImage: string;
};

const ProfileLeftContent: FC<ProfileLeftContentProps> = ({
  isUserProfile,
  fullName,
  profileImage,
}) => (
  <S.MainContainer>
    <S.UserAreaContainer>
      <ImageProfileArea isUserProfile={isUserProfile} image={profileImage} />
      <S.UserAreaTextContainer>
        <Title size="medium" color="black">
          # {fullName}
        </Title>
        <Description size="medium">{faker.lorem.words(15)}</Description>
      </S.UserAreaTextContainer>
      <S.UserAreaDateContainer>
        <Icon color="blue" size="small" Type={AiFillCalendar} />
        <S.UserAreaDateText>
          Se unio el 24 de Febrero del 2000
        </S.UserAreaDateText>
      </S.UserAreaDateContainer>
    </S.UserAreaContainer>
    <Button text="Actualizar Informacion" />
  </S.MainContainer>
);

export default ProfileLeftContent;
