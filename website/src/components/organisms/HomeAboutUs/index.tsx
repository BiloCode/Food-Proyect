import * as S from "./styles";

import Image from "components/atoms/Image";
import TitleWithDescription from "components/molecules/TitleWithDescription";
import imageSource from "assets/images/Image_1.jpg";

const HomeAboutUs = () => {
  return (
    <S.MainContainer>
      <S.ImageContainer>
        <Image src={imageSource} />
      </S.ImageContainer>
      <TitleWithDescription
        textTittle="Tenemos la mejor comida del pais"
        textDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        tittle={{ color: "black", size: "large" }}
        description={{ color: "black" }}
        orientation="right"
      />
    </S.MainContainer>
  );
};

export default HomeAboutUs;
