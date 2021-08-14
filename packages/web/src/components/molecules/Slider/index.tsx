import { memo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as S from "./styles";

import { Icon, Image } from "@food/components";

type TSlider = {
  images: string[];
};

const Slider = ({ images }: TSlider) => {
  const [position, setPosition] = useState<number>(0);

  const onClickPrevius = () => {
    if (position === 0) return;

    setPosition(position - 1);
  };

  const onClickNext = () => {
    if (position === images.length - 1) return;

    setPosition(position + 1);
  };

  return (
    <S.Container>
      <S.SliderImages currentIndex={position}>
        {images.map((v, i) => (
          <Image key={i} src={v} imageCover />
        ))}
      </S.SliderImages>
      <S.ArrowsContainer>
        <S.Arrow onClick={onClickPrevius}>
          <Icon color="white" size="big" type={IoIosArrowBack} />
        </S.Arrow>
        <S.Arrow onClick={onClickNext}>
          <Icon color="white" size="big" type={IoIosArrowForward} />
        </S.Arrow>
      </S.ArrowsContainer>
    </S.Container>
  );
};

export default memo(Slider);
