import * as S from "./styles";

import Image from "components/atoms/Image";
import HomeTittle from "components/atoms/HomeTittle";
import HomeTittleDescription from "components/atoms/HomeTittleDescription";

import image from "assets/images/Image_1.jpg";

const HomeInformation = () => {
  return (
    <S.HomeInformation>
      <div>
        <HomeTittle>TENEMOS LA MEJOR COMIDA DEL PAIS</HomeTittle>
        <HomeTittleDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </HomeTittleDescription>
      </div>
      <S.ContainerImage>
        <Image src={image} />
      </S.ContainerImage>
    </S.HomeInformation>
  );
};

export default HomeInformation;
