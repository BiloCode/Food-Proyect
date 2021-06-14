import { ChangeEvent } from "react";
import * as S from "./styles";

import { IoFastFood } from "react-icons/io5";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import ModalFoodItemList from "components/molecules/ModalFoodItemList";

import useActive from "hooks/useActive";

import { FoodModelType } from "application/types/FoodModelType";

type SearchableProps = {
  foods: FoodModelType[];
  onClearFoods(): void;
  onAddItem(_id: string): () => void;
  onSearch(ev: ChangeEvent<HTMLInputElement>): void;
};

const FormControlSearchable = ({
  foods,
  onSearch,
  onAddItem,
  onClearFoods,
}: SearchableProps) => {
  const { active, setState } = useActive();

  const onFocus = () => {
    if (!foods.length) return;

    setState(true);
  };

  const onClose = () => setState(false);

  const AddNewItemToList = (_id: string) => () => {
    onAddItem(_id)();
    setState(false);
  };

  return (
    <S.FormControlSearch>
      <S.InputContainer>
        <FormControl
          icon={IoFastFood}
          onFocus={onFocus}
          onChange={onSearch}
          labelText="Buscar Comidas"
        />
        {active && (
          <S.SearchContainer>
            {foods.map((v) => (
              <ModalFoodItemList
                key={v._id}
                name={v.name}
                price={v.price}
                image={v.image.url}
                onClick={AddNewItemToList(v._id)}
              />
            ))}
          </S.SearchContainer>
        )}
      </S.InputContainer>
      <Button
        styles={{ color: active ? "red" : "yellow" }}
        text={active ? "Cerrar" : "Limpiar Todo"}
        onClick={active ? onClose : onClearFoods}
      />
    </S.FormControlSearch>
  );
};

export default FormControlSearchable;
