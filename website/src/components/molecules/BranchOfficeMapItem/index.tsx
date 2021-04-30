import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import { FiChevronRight } from "react-icons/fi";
import * as S from "./styles";

type BranchOfficeMapItemProps = {
  text: string;
  tittle: string;
  image: string;
  onClick(): void;
};

const BranchOfficeMapItem = ({
  image,
  text,
  tittle,
  onClick,
}: BranchOfficeMapItemProps) => {
  return (
    <S.Container onClick={onClick}>
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

export default BranchOfficeMapItem;
