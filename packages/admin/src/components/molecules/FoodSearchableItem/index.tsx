import classNames from "classnames";
import * as S from "./styles";

type SearchableProps = {
  name: string;
  isSaved?: boolean;
  onClick(): void;
};

const FoodSearchbleItem = ({ name, onClick, isSaved }: SearchableProps) => (
  <S.MainContainer className={classNames({ saved: isSaved })} onClick={onClick}>
    <S.Content>
      <S.Indicator></S.Indicator>
      <S.Name>{name}</S.Name>
    </S.Content>
    {isSaved && <S.TextSaved>Agregado</S.TextSaved>}
  </S.MainContainer>
);

export default FoodSearchbleItem;
