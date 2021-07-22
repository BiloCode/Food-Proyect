import { useMapContext } from "context/MapContext/context";
import { memo } from "react";
import { FiChevronRight } from "react-icons/fi";
import * as S from "./styles";

import Description from "components/atoms/Description";
import { Title, Icon, Image } from "@food-proyect/shared-components";

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
        <Title>{name}</Title>

        <Description color="light-black" size="small">
          {description}
        </Description>
      </S.TextContainer>
      <div>
        <Icon type={FiChevronRight} size="small-medium" color="gray" />
      </div>
    </S.Container>
  );
};

export default memo(BranchOfficeMapItem);
