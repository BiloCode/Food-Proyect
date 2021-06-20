import Characterist from "components/molecules/Characterist";
import * as S from "./styles";
import { IoMdMailOpen } from "react-icons/io";

const HomeCharacterist = () => {
  return (
    <S.HomeCharacteristContainer>
      <S.CharacteristList>
        <Characterist text="Carateristica" icon={IoMdMailOpen} />
        <Characterist text="Carateristica" icon={IoMdMailOpen} />
        <Characterist text="Carateristica" icon={IoMdMailOpen} />
        <Characterist text="Carateristica" icon={IoMdMailOpen} />
        <Characterist text="Carateristica" icon={IoMdMailOpen} />
      </S.CharacteristList>
    </S.HomeCharacteristContainer>
  );
};

export default HomeCharacterist;
