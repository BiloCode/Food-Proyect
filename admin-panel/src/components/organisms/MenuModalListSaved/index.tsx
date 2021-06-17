import * as S from "./styles";

import Title from "components/atoms/Title";
import FoodHorizontalCard from "components/molecules/FoodHorizontalCard";

import { FoodModelType } from "application/types/FoodModelType";

type ListSavedProps = {
  foods: FoodModelType[];
  onClickTrash(index: number): () => void;
};

const MenuModalListSaved = ({ foods, onClickTrash }: ListSavedProps) => (
  <S.FoodListContainer>
    <Title size="small-medium">Lista de Comestibles</Title>
    <S.Container>
      {foods.length ? (
        <S.FoodSavedContainer>
          {foods.map((v, i) => (
            <FoodHorizontalCard
              key={i}
              name={v.name}
              price={v.price}
              image={v.image.url}
              onClickButton={onClickTrash(i)}
            />
          ))}
        </S.FoodSavedContainer>
      ) : (
        <S.DefaultFoodSaved>
          <S.DefaultFoodText>
            Aun no ha agregado ninguna comida
          </S.DefaultFoodText>
        </S.DefaultFoodSaved>
      )}
    </S.Container>
  </S.FoodListContainer>
);

export default MenuModalListSaved;
