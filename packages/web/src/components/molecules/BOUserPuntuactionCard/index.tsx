import { FC, memo } from "react";
import firebase from "firebase";
import { useNavigate } from "@reach/router";
import * as S from "./styles";

import Description from "components/atoms/Description";
import CircularImage from "components/atoms/CircularImage";

import { StarListPuntuaction } from "@food/components";

type PuntuactionCardProps = {
  userId: string;
  userName: string;
  userImage: string;
  stars: number;
  description: string;
  createdAt: firebase.firestore.Timestamp;
};

const BOUserPuntuactionCard: FC<PuntuactionCardProps> = ({
  stars,
  userId,
  userName,
  userImage,
  description,
  createdAt,
}) => {
  const navigate = useNavigate();
  const NavigateToUserProfile = () => navigate("/user/" + userId);

  return (
    <S.MainContainer>
      <S.UserInfoDivider>
        <CircularImage src={userImage} hoverable />
        <S.ContainerUserText>
          <S.Username onClick={NavigateToUserProfile}>{userName}</S.Username>
          <StarListPuntuaction stars={stars} iconColor="blue" />
        </S.ContainerUserText>
        <S.Date>{Intl.DateTimeFormat().format(createdAt.toDate())}</S.Date>
      </S.UserInfoDivider>
      {description && <Description size="small">{description}</Description>}
    </S.MainContainer>
  );
};

export default memo(BOUserPuntuactionCard);
