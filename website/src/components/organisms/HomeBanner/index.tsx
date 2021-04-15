import * as S from "./styles";

import Image from "components/atoms/Image";
import FloatLoginHome from "../FloatLoginHome";
import ImageMainBanner from "assets/images/Main_Banner.jpg";

/*** IN PROCESS... */

const HomeBanner = () => (
  <S.MainContainer>
    <S.ImageContainer>
      <Image src={ImageMainBanner} />
    </S.ImageContainer>
    <S.FloatContent>
      <S.BannerFloatContainer>
        <div>{/** TitleWithDescription */}</div>
        <FloatLoginHome />
      </S.BannerFloatContainer>
    </S.FloatContent>
  </S.MainContainer>
);

export default HomeBanner;
