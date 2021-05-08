import * as S from "./styles";

import Image from "../../atoms/Image";

import Logo from "assets/images/Logo.svg";
import Spinner from "../../atoms/Spinner";

const FallbackLoading = () => (
  <S.MainContainer>
    <S.CenterContainer>
      <S.SVGContainer>
        <Image src={Logo} />
      </S.SVGContainer>
      <Spinner size="small" />
    </S.CenterContainer>
  </S.MainContainer>
);

export default FallbackLoading;
