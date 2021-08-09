import * as S from "./styles";

import Logo from "assets/images/Logo.svg";
import { Image, Spinner } from "@food-proyect/shared-components";

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
