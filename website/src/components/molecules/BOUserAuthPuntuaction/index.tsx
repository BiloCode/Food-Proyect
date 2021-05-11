import { FC } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Description from "components/atoms/Description";
import StarListPuntuaction from "../StarListPuntuaction";

type BOUserAuthPuntuactionProps = {
  stars: number;
  description: string;
};

const BOUserAuthPuntuaction: FC<BOUserAuthPuntuactionProps> = ({
  stars,
  description,
}) => (
  <S.MainContainer>
    <S.HeadContent>
      <StarListPuntuaction stars={stars} iconColor="blue" />
      <Title color="blue" size="small-medium">
        Mi valoracion
      </Title>
    </S.HeadContent>
    <Description size="small">{description}</Description>
  </S.MainContainer>
);

export default BOUserAuthPuntuaction;
