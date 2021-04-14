import * as S from "./styles";

import Image from "components/atoms/Image";
import ImageMainBanner from "assets/images/Main_Banner.jpg";

/*** IN PROCESS... */

const HomeBanner = () => (
  <S.MainContainer>
    <S.ImageContainer>
      <Image src={ImageMainBanner} />
    </S.ImageContainer>
    <div>
      <div>{/** TitleWithDescription */}</div>
      <div>{/** Login Form */}</div>
    </div>
  </S.MainContainer>
);

export default HomeBanner;
