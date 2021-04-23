import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import useStarsRecibed from "hooks/useStarsRecibed";
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
  const GetStart = useStarsRecibed(stars);

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
        <div>{GetStart().map((v) => v)}</div>
      </div>
      <Button type="button" size="small" text="Ver Detalles" color="yellow" />
    </S.SucursalInformationContainer>
  );
};

export default SucursalInformation;
