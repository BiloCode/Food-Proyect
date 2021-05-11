import { useNavigate } from "@reach/router";
import * as S from "./styles";

import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import StarListPuntuaction from "../StarListPuntuaction";

type SucursalInformationProps = {
  textTittle: string;
  textDescription: string;
  stars: number;
  image: string;
  id: string;
};

const BranchOfficeInformation = ({
  id,
  stars,
  image,
  textTittle,
  textDescription,
}: SucursalInformationProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/branch-office/${id}`);
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={image} />
      </S.ImageContainer>
      <div>
        <S.TittleContainer>
          <Title color="black" lowercase size="small">
            {textTittle}
          </Title>
        </S.TittleContainer>
        <S.DescriptionContainer>
          <Description color="light-black" size="small">
            {textDescription}
          </Description>
        </S.DescriptionContainer>
        <StarListPuntuaction stars={stars} />
      </div>
      <Button
        onClick={onClick}
        text="Ver Detalles"
        styles={{
          size: "medium",
          color: "yellow",
        }}
      />
    </S.Container>
  );
};

export default BranchOfficeInformation;
