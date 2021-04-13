import HomeTittle from "components/atoms/HomeTittle";
import { HomeTittleDescription } from "components/atoms/HomeTittleDescription/styles";
import * as S from "./styles";

const HomeInformation = () => {
  return (
    <S.HomeInformation>
      <HomeTittle>TENEMOS LA MEJOR COMIDA DEL PAIS</HomeTittle>
      <HomeTittleDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </HomeTittleDescription>
    </S.HomeInformation>
  );
};

export default HomeInformation;
