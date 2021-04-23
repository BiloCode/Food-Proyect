import * as S from "./styles";

import FormLogin from "../FormLogin";
import ImageMainBanner from "assets/images/Main_Banner.jpg";
import HomeTitleWithDescription from "components/molecules/HomeTitleWithDescription";
import { useAuthContext } from "context/AuthContext/context";

/*** IN PROCESS... */

const HomeBanner = () => {
  const { user } = useAuthContext();

  return (
    <S.MainContainer>
      <S.ImageContainer backgroundUrl={ImageMainBanner} />
      <S.FloatContent>
        <S.BannerFloatContainer>
          <HomeTitleWithDescription
            color="white"
            title="Bienvenido a nuestro espacio"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          {!user && (
            <S.FormLoginContainer>
              <FormLogin />
            </S.FormLoginContainer>
          )}
        </S.BannerFloatContainer>
      </S.FloatContent>
    </S.MainContainer>
  );
};

export default HomeBanner;
