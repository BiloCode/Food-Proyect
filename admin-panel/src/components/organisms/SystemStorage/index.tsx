import * as S from "./styles";

import Title from "components/atoms/Title";
import ProgressBar from "components/atoms/ProgressBar";
import SectionSeparator from "components/atoms/SectionSeparator";
import TextWithBox from "components/atoms/TextWithBox";

const SystemStorage = () => (
  <SectionSeparator>
    <Title>Almacenamiento del Sistema</Title>
    <S.OptionContainer>
      <TextWithBox boxColor="green" text="Usado 1.5GB" />
      <TextWithBox text="Disponible 3.0GB" />
    </S.OptionContainer>
    <ProgressBar percentage={60} />
  </SectionSeparator>
);

export default SystemStorage;
