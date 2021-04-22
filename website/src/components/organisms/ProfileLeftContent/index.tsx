import * as S from "./styles";
import faker from "faker";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import ImageProfileArea from "components/molecules/ImageProfileArea";

const ProfileLeftContent = () => (
  <S.MainContainer>
    <S.UserAreaContainer>
      <ImageProfileArea image={faker.image.people()} />
      <S.UserAreaTextContainer>
        <Title size="medium" color="black">
          # Billy Alexander Paredes Aycho
        </Title>
        <Description>{faker.lorem.words(15)}</Description>
      </S.UserAreaTextContainer>
    </S.UserAreaContainer>
    <Button text="Actualizar Informacion" />
  </S.MainContainer>
);

export default ProfileLeftContent;
