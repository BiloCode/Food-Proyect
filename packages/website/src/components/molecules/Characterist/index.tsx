import { FC } from "react";
import * as S from "./styles";
import { CharacteristType } from "./type";

import { Icon, Title } from "@food-proyect/shared-components";

const Characterist: FC<CharacteristType> = ({ text, icon }) => {
  return (
    <S.Characterist>
      <S.CharacteristIcon>
        <Icon type={icon} color="white" size="medium" />
      </S.CharacteristIcon>
      <Title size="small">{text}</Title>
    </S.Characterist>
  );
};

export default Characterist;
