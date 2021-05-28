import ButtonRounded from "components/atoms/ButtonRounded";
import Description from "components/atoms/Description";
import Title from "components/atoms/Title";
import * as S from "./styles";

const BranchDetailContent = () => {
  return (
    <S.Container>
      <S.Head>
        <Title size="default">Descripcion</Title>
        <S.ButtonContainer>
          <ButtonRounded text="Editar" />
        </S.ButtonContainer>
      </S.Head>
      <div>
        <Description size="small" color="black">
          aaaaaaa
        </Description>
      </div>
    </S.Container>
  );
};

export default BranchDetailContent;
