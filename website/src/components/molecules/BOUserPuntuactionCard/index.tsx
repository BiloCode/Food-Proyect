import { useNavigate } from "@reach/router";
import faker from "faker";
import * as S from "./styles";

import Description from "components/atoms/Description";
import StarListPuntuaction from "../StarListPuntuaction";
import CircularImage from "components/atoms/CircularImage";

const BOUserPuntuactionCard = () => {
  const navigate = useNavigate();
  const NavigateToUserProfile = () => navigate("/user/");

  return (
    <S.MainContainer>
      <S.UserInfoDivider>
        <CircularImage src={faker.random.image()} hoverable />
        <S.ContainerUserText>
          <S.Username>Billy Paredes Aycho</S.Username>
          <StarListPuntuaction stars={3} iconColor="blue" />
        </S.ContainerUserText>
        <S.Date>26/10/2000</S.Date>
      </S.UserInfoDivider>
      <Description size="small">{faker.lorem.words(20)}</Description>
    </S.MainContainer>
  );
};

export default BOUserPuntuactionCard;
