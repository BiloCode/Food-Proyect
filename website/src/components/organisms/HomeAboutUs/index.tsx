import * as S from "./styles";

import Image from "components/atoms/Image";
import HomeTitleWithDescription from "components/molecules/HomeTitleWithDescription";
import imageSource from "assets/images/Image_1.jpg";

const HomeAboutUs = () => {
  return (
    <S.MainContainer>
      <S.ImageContainer>
        <Image src={imageSource} />
      </S.ImageContainer>
      <HomeTitleWithDescription
        orientation="right"
        title="Tenemos la mejor comida del pais"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
    </S.MainContainer>
  );
};

export default HomeAboutUs;
