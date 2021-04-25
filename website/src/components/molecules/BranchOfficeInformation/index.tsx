import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import StarListPuntuaction from "../StarListPuntuaction";
import * as S from "./styles";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;

type SucursalInformationProps = {
  textTittle: string;
  textDescription: string;
  stars: StarsType;
  image: string;
};

const BranchOfficeInformation = ({
  textTittle,
  textDescription,
  stars,
  image,
}: SucursalInformationProps) => {
  return (
    <S.Container>
      <Image src={image} />
      <div>
        <S.TittleContainer>
          <Title color="black" size="extra_small">
            {textTittle}
          </Title>
        </S.TittleContainer>
        <S.DescriptionContainer>
          <Description color="black" size="small">
            {textDescription}
          </Description>
        </S.DescriptionContainer>
        <StarListPuntuaction stars={stars} />
      </div>
      <Button
        text="Ver Detalles"
        styles={{
          size: "small",
          color: "yellow",
        }}
      />
    </S.Container>
  );
};

export default BranchOfficeInformation;
