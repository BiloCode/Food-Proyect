import * as S from "./styles";
import { AiFillCalendar } from "react-icons/ai";
import faker from "faker";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import ImageProfileArea from "components/molecules/ImageProfileArea";
import Icon from "components/atoms/Icon";

const ProfileLeftContent = () => (
  <S.MainContainer>
    <S.UserAreaContainer>
      <ImageProfileArea image={faker.image.people()} />
      <S.UserAreaTextContainer>
        <Title size="medium" color="black">
          # Billy Alexander Paredes Aycho
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
