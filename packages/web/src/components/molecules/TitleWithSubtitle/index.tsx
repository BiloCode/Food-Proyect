import { Paragraph, Title } from "@food/components";
import * as S from "./styles";

type TProps = {
  title: string;
  subtitle: string;
};

const TitleWithSubtitle = ({ title, subtitle }: TProps) => {
  return (
    <S.Container>
      <Title weight="black">{title}</Title>
      <Paragraph regular>{subtitle}</Paragraph>
    </S.Container>
  );
};

export default TitleWithSubtitle;
