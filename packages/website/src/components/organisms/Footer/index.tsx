import * as S from "./styles";

import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";
import Title from "components/atoms/Title";

const Footer = () => (
  <S.Container>
    <S.TextContainer>
      <Title size="medium" color="white">
        Bembos SAC
      </Title>
      <Description color="white">
        (2021) Todos los derechos reservados
      </Description>
    </S.TextContainer>
    <S.IconsContainer>
      <Icon size="medium" Type={AiFillFacebook} color="white" />
      <Icon size="medium" Type={AiFillYoutube} color="white" />
      <Icon size="medium" Type={AiOutlineTwitter} color="white" />
    </S.IconsContainer>
  </S.Container>
);

export default Footer;
