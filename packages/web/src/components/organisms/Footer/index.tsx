import * as S from "./styles";

import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import Description from "components/atoms/Description";
import { Icon, Title } from "@food/components";

const Footer = () => (
  <S.Container>
    <S.TextContainer>
      <Title>Bembos SAC</Title>
      <Description color="white">
        (2021) Todos los derechos reservados
      </Description>
    </S.TextContainer>
    <S.IconsContainer>
      <Icon size="medium" type={AiFillFacebook} color="white" />
      <Icon size="medium" type={AiFillYoutube} color="white" />
      <Icon size="medium" type={AiOutlineTwitter} color="white" />
    </S.IconsContainer>
  </S.Container>
);

export default Footer;
