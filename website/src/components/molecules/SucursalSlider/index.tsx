import Image from "components/atoms/Image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as S from "./styles";

import Image01 from "assets/images/Hamburguesa.jpg";
import Icon from "components/atoms/Icon";

const SucursalSlider = () => {
  return (
    <S.SucursalSliderContainer>
      <Image src={Image01} />
      <S.SucursalSliderArrows>
        <S.SucursalArrow>
          <Icon color="white" size="medium" Type={IoIosArrowBack} />
        </S.SucursalArrow>
        <S.SucursalArrow>
          <Icon color="white" size="medium" Type={IoIosArrowForward} />
        </S.SucursalArrow>
      </S.SucursalSliderArrows>
    </S.SucursalSliderContainer>
  );
};

export default SucursalSlider;
