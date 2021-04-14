import Title from "components/atoms/Title";
import { FC } from "react";
import * as S from "./styles";
import { IoMdMailOpen } from "react-icons/io";

const Characterist: FC = ({ children }) => {
  return (
    <S.Characterist>
      <S.CharacteristIcon>
        <IoMdMailOpen />
      </S.CharacteristIcon>
      <Title color="black" size="small">
        {children}
      </Title>
    </S.Characterist>
  );
};

export default Characterist;
