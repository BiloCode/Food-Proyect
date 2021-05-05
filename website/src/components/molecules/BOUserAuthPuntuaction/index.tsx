import faker from "faker";
import * as S from "./styles";

import Description from "components/atoms/Description";
import StarListPuntuaction from "../StarListPuntuaction";
import Title from "components/atoms/Title";

const BOUserAuthPuntuaction = () => (
  <S.MainContainer>
    <S.HeadContent>
      <StarListPuntuaction stars={4} iconColor="blue" />
      <Title color="blue" size="small-medium">
        Mi valoracion
      </Title>
    </S.HeadContent>
    <Description size="small">{faker.lorem.words(20)}</Description>
  </S.MainContainer>
);

export default BOUserAuthPuntuaction;
