import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import { useMapContext } from "context/MapContext/context";
import { memo } from "react";
import { FiChevronRight } from "react-icons/fi";
import * as S from "./styles";

type BranchOfficeMapItemProps = {
  name: string;
  image: string;
  stars: number;
  description: string;
  length: number;
  latitude: number;
};

const BranchOfficeMapItem = ({
  latitude,
  length,
  stars,
  image,
  name,
  description,
}: BranchOfficeMapItemProps) => {
  const { setMapCoords } = useMapContext();

  const setterMapCoords = () => {
    setMapCoords({
      latitude,
      length,
      name,
      description,
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
          {name}
        </Title>

        <Description color="light-black" size="small">
          {description}
        </Description>
      </S.TextContainer>
      <div>
        <Icon Type={FiChevronRight} size="small-medium" color="gray" />
      </div>
    </S.Container>
  );
};

export default memo(BranchOfficeMapItem);
