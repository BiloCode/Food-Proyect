import Title from "components/atoms/Title";
import { FC } from "react";
import * as S from "./styles";
import { CharacteristType } from "./type";
import Icon from "components/atoms/Icon";

const Characterist: FC<CharacteristType> = ({ text, icon }) => {
  return (
    <S.Characterist>
      <S.CharacteristIcon>
        <Icon Type={icon} color="white" size="medium" />
      </S.CharacteristIcon>
      <Title color="black" size="small">
        {text}
      </Title>
    </S.Characterist>
  );
};

export default Characterist;
