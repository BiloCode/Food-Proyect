import { memo, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as S from "./styles";

import { Icon, Image } from "@food-proyect/shared-components";

const Slider = () => {
  const images = new Array(3).fill("");
  const [position, setPosition] = useState<number>(0);

  const ImagesRef = useRef<HTMLDivElement>(null);

  const onClickPrevius = () => {
    if (position === 0) return;
    setPosition(position - 1);
    SliderPosition(position - 1);
  };

  const onClickNext = () => {
    if (position === images.length - 1) return;
    setPosition(position + 1);
    SliderPosition(position + 1);
  };

  const SliderPosition = (position: number) =>
    (ImagesRef!.current.style.transform = `translateX(${position * -100}%)`);

  return (
    <S.Container>
      <S.SliderImages ref={ImagesRef}>
        {images.map((v, i) => (
          <Image key={i} src={v} imageCover />
        ))}
      </S.SliderImages>
      <S.ArrowsContainer>
        <S.Arrow onClick={onClickPrevius}>
          <Icon color="white" size="medium" type={IoIosArrowBack} />
        </S.Arrow>
        <S.Arrow onClick={onClickNext}>
          <Icon color="white" size="medium" type={IoIosArrowForward} />
        </S.Arrow>
      </S.ArrowsContainer>
    </S.Container>
  );
};

export default memo(Slider);
