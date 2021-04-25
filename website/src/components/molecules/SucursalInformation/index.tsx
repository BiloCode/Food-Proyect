import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import Stars from "../Stars";
import * as S from "./styles";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;

type SucursalInformationProps = {
  textTittle: string;
  textDescription: string;
  stars: StarsType;
  image: string;
};

const SucursalInformation = ({
  textTittle,
  textDescription,
  stars,
  image,
}: SucursalInformationProps) => {
  return (
    <S.SucursalInformationContainer>
      <Image src={image} />
      <div>
        <S.SucursalTittleContainer>
          <Title color="black" size="extra_small">
            {textTittle}
          </Title>
        </S.SucursalTittleContainer>
        <S.SucursalDescriptionContainer>
          <Description color="black" size="small">
            {textDescription}
          </Description>
        </S.SucursalDescriptionContainer>
        <Stars stars={stars} />
      </div>
      <Button
        text="Ver Detalles"
        styles={{
          size: "small",
          color: "yellow",
        }}
      />
    </S.SucursalInformationContainer>
  );
};

export default SucursalInformation;
