import * as S from "./styles";

import { FaRegComments } from "react-icons/fa";

import Icon from "../../atoms/Icon";
import Title from "../../atoms/Title";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import StarListPuntuaction from "../../molecules/StarListPuntuaction";

type BranchOfficeCardProps = {
  name: string;
  stars: number;
  image: string;
  description: string;
  commentsNumber: number;
  onClickButton(): void;
};

const BranchOfficeCard = ({
  stars,
  image,
  name,
  description,
  commentsNumber,
  onClickButton,
}: BranchOfficeCardProps) => (
  <S.MainContainer>
    <S.ImageContainer>
      <Image src={image} imageCover />
    </S.ImageContainer>
    <S.BranchOfficeDataContainer>
      <S.DataContainer>
        <S.TextContainer>
          <Title size="small-medium">{name}</Title>
          <S.Description>{description}</S.Description>
        </S.TextContainer>
        <S.AsideContainer>
          <S.CommentsContainer>
            <Icon type={FaRegComments} size="small" color="gray" />
            <S.CommentText>{commentsNumber}</S.CommentText>
          </S.CommentsContainer>
          <StarListPuntuaction
            stars={stars}
            iconSize="small"
            iconColor="yellow"
          />
        </S.AsideContainer>
      </S.DataContainer>
      <Button text="Ver Detalles" onClick={onClickButton} />
    </S.BranchOfficeDataContainer>
  </S.MainContainer>
);

export default BranchOfficeCard;
