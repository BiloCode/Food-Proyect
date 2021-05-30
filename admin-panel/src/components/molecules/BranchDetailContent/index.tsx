import ButtonRounded from "components/atoms/ButtonRounded";
import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import * as S from "./styles";

type BranchDetailContentProps = {
  id: string;
  tittle: string;
  content: string;
};

const BranchDetailContent = ({
  id,
  tittle,
  content,
}: BranchDetailContentProps) => {
  return (
    <S.Container>
      <S.Head>
        <Title size="default">{tittle}</Title>
        <S.ButtonContainer>
          <ButtonRounded text="Editar" />
        </S.ButtonContainer>
      </S.Head>
      <div>
        <Description size="small" color="black">
          {content}
        </Description>
      </div>
    </S.Container>
  );
};

export default BranchDetailContent;
