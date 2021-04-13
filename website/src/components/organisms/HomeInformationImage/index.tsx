import Image from "components/atoms/Image";
import HomeInformation from "components/molecules/HomeInformation";
import * as S from "./styles";

import imageSource from "assets/images/Image_1.jpg";

const HomeInformationImageContainer = () => {
  return (
    <S.MainContainer>
      <S.ImageContainer>
        <Image src={imageSource} />
      </S.ImageContainer>
      <HomeInformation
        textTittle="Tenemos la mejor comida del pais"
        textDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        color="black"
        orientation="right"
      />
    </S.MainContainer>
  );
};

export default HomeInformationImageContainer;
