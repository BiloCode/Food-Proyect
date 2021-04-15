import Characterist from "components/molecules/Characterist";
import * as S from "./styles";

const HomeCharacterist = () => {
  return (
    <S.HomeCharacteristContainer>
      <S.CharacteristList>
        <Characterist>Characterist</Characterist>
        <Characterist>Characterist</Characterist>
        <Characterist>Characterist</Characterist>
        <Characterist>Characterist</Characterist>
        <Characterist>Characterist</Characterist>
      </S.CharacteristList>
    </S.HomeCharacteristContainer>
  );
};

export default HomeCharacterist;
