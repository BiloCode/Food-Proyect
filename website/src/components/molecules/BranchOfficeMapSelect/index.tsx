import Description from "components/atoms/Description";
import Icon from "components/atoms/Icon";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";
import { FiChevronRight } from "react-icons/fi";
import StarListPuntuaction from "../StarListPuntuaction";
import * as S from "./styles";

type StarsType = 0 | 1 | 2 | 3 | 4 | 5;

type BranchOfficeMapItemProps = {
  text: string;
  tittle: string;
  stars: StarsType;
};

const BranchOfficeMapSelected = ({
  text,
  tittle,
  stars,
}: BranchOfficeMapItemProps) => {
  return (
    <S.Container>
      <S.TextContainer>
        <Title size="small" color="light-black">
          {tittle}
        </Title>

        <Description color="light-black" size="small">
          {text}
        </Description>
      </S.TextContainer>
      <S.StarsContainer>
        <StarListPuntuaction stars={stars} />
      </S.StarsContainer>
    </S.Container>
  );
};

export default BranchOfficeMapSelected;
