import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import { useMapContext } from "context/MapContext/context";
import { memo } from "react";
import { FiChevronRight } from "react-icons/fi";
import * as S from "./styles";

type startType = 0 | 1 | 2 | 3 | 4 | 5;

type BranchOfficeMapItemProps = {
  text: string;
  tittle: string;
  image: string;
  latitude: number;
  length: number;
  stars: startType;
};

const BranchOfficeMapItem = ({
  latitude,
  length,
  stars,
  image,
  text,
  tittle,
}: BranchOfficeMapItemProps) => {
  const { setMapCoords } = useMapContext();

  const setterMapCoords = () => {
    setMapCoords({
      latitude,
      length,
      text,
      tittle,
      stars,
    });
  };

  return (
    <S.Container onClick={setterMapCoords}>
      <S.ImageContainer>
        <Image src={image} />
      </S.ImageContainer>
      <S.TextContainer>
        <Title size="small" color="light-black">
          {tittle}
        </Title>

        <Description color="light-black" size="small">
          {text}
        </Description>
      </S.TextContainer>
      <div>
        <Icon Type={FiChevronRight} size="small-medium" color="gray" />
      </div>
    </S.Container>
  );
};

export default memo(BranchOfficeMapItem);
