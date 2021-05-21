import { useNavigate } from "@reach/router";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Image from "components/atoms/Image";
import Button from "components/atoms/Button";
import StarListPuntuaction from "components/molecules/StarListPuntuaction";

type BranchOfficeCardProps = {
  id: string;
  name: string;
  stars: number;
  image: string;
  description: string;
};

const BranchOfficeCard = ({
  id,
  stars,
  image,
  name,
  description,
}: BranchOfficeCardProps) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/branch/${id}`);

  return (
    <S.MainContainer>
      <S.ImageContainer>
        <Image src={image} imageCover />
      </S.ImageContainer>
      <S.BranchOfficeDataContainer>
        <S.DataContainer>
          <S.TextContainer>
            <Title size="small">{name}</Title>
            <S.Description>{description}</S.Description>
          </S.TextContainer>
          <S.StarsContainer>
            <StarListPuntuaction
              stars={stars}
              iconSize="small"
              iconColor="yellow"
            />
          </S.StarsContainer>
        </S.DataContainer>
        <Button
          onClick={onClick}
          text="Ver Detalles"
          styles={{
            size: "small",
            color: "blue",
          }}
        />
      </S.BranchOfficeDataContainer>
    </S.MainContainer>
  );
};

export default BranchOfficeCard;
