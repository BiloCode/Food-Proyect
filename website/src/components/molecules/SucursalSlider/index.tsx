import Image from "components/atoms/Image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as S from "./styles";

import Image01 from "assets/images/Hamburguesa.jpg";
import Image02 from "assets/images/Hamburguesa_02.jpg";
import Icon from "components/atoms/Icon";
import { LegacyRef, useRef } from "react";

const SucursalSlider = () => {
  const images = [Image01, Image02];

  const ImagesRef: LegacyRef<HTMLDivElement> = useRef(null);

  const onClickPrevius = () => {
    ImagesRef!.current.style.transform = "translateX(0)";
  };

  const onClickNext = () => {
    ImagesRef!.current.style.transform = "translateX(-100%)";
  };

  return (
    <S.SucursalSliderContainer>
      <S.SucursalSliderImages ref={ImagesRef}>
        {images.map((v, i) => (
          <S.Image key={i}>
            <Image src={v} />
          </S.Image>
        ))}
      </S.SucursalSliderImages>
      <S.SucursalSliderArrows>
        <S.SucursalArrow onClick={onClickPrevius}>
          <Icon color="white" size="medium" Type={IoIosArrowBack} />
        </S.SucursalArrow>
        <S.SucursalArrow onClick={onClickNext}>
          <Icon color="white" size="medium" Type={IoIosArrowForward} />
        </S.SucursalArrow>
      </S.SucursalSliderArrows>
    </S.SucursalSliderContainer>
  );
};

export default SucursalSlider;
