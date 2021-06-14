import * as S from "./styles";

import Title from "components/atoms/Title";
import ModalFoodItemList from "components/molecules/ModalFoodItemList";

import { FoodModelType } from "application/types/FoodModelType";

type ListSavedProps = {
  foods: FoodModelType[];
};

const MenuModalListSaved = ({ foods }: ListSavedProps) => (
  <S.FoodListContainer>
    <Title size="small-medium">Lista de Comestibles</Title>
    <S.Container>
      {foods.length ? (
        <S.FoodSavedContainer>
          {foods.map((v) => (
            <ModalFoodItemList
              key={v._id}
              name={v.name}
              price={v.price}
              image={v.image.url}
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
