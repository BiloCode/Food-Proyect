import { FC } from "react";
import * as S from "./styles";

import Description from "components/atoms/Description";
import { StarListPuntuaction, Title } from "@food-proyect/shared-components";

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
    <Description size="small">
      {description ? description : "Sin Descripción."}
    </Description>
  </S.MainContainer>
);

export default BOUserAuthPuntuaction;
