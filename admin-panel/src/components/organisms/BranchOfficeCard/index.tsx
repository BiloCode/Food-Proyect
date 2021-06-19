import { useNavigate } from "@reach/router";
import * as S from "./styles";

import { FaRegComments } from "react-icons/fa";

import Icon from "components/atoms/Icon";
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
  commentsNumber: number;
};

const BranchOfficeCard = ({
  id,
  stars,
  image,
  name,
  description,
  commentsNumber,
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
        <Button
          onClick={onClick}
          text="Ver Detalles"
          styles={{
            color: "blue",
          }}
        />
      </S.BranchOfficeDataContainer>
    </S.MainContainer>
  );
};

export default BranchOfficeCard;
