import * as S from "./styles";

import { FaRegComments } from "react-icons/fa";

import Icon from "../../atoms/Icon";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";
import CardTemplate from "../../molecules/CardTemplate";
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
  <CardTemplate image={image}>
    <S.DataContainer>
      <S.TextContainer>
        <Title weight="e-bold" size="small">
          {name}
        </Title>
        <Paragraph size="small">{description}</Paragraph>
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
  </CardTemplate>
);

export default BranchOfficeCard;
