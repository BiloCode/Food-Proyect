import * as S from "./styles";

type CardProps = {
  imageRender: () => JSX.Element;
  textRender: () => JSX.Element;
};

const EatableCard = ({ imageRender: Image, textRender: Text }: CardProps) => (
  <S.MainContainer>
    <S.ImageContainer>
      <Image />
    </S.ImageContainer>
    <S.TextContainer>
      <Text />
    </S.TextContainer>
  </S.MainContainer>
);

export default EatableCard;
