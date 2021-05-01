import faker from "faker";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Description from "components/atoms/Description";
import StarListPuntuaction from "components/molecules/StarListPuntuaction";

type BODetailTextProps = {
  stars: number;
  description: string;
  foodType: string; //???
};

const BODetailText = () => (
  <S.MainContainer>
    <div>
      <S.TitleContainer>
        <Title size="medium" color="black">
          Sucursal los Olivos
        </Title>
        <S.ButtonContainer>
          <Button text="vegetariano" styles={{ size: "small" }} />
        </S.ButtonContainer>
      </S.TitleContainer>
      <StarListPuntuaction stars={4} iconSize="small-medium" />
    </div>
    <Description size="small">{faker.lorem.words(60)}</Description>
  </S.MainContainer>
);

export default BODetailText;
