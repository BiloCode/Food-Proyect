import * as S from "./styles";

type SearchableProps = {
  name: string;
  onClick(): void;
};

const FoodSearchbleItem = ({ name, onClick }: SearchableProps) => (
  <S.MainContainer onClick={onClick}>
    <S.Indicator></S.Indicator>
    <S.Name>{name}</S.Name>
  </S.MainContainer>
);

export default FoodSearchbleItem;
