import { ChangeEvent, forwardRef } from "react";
import * as S from "./styles";

import { IoFastFood } from "react-icons/io5";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

import useActive from "hooks/useActive";

import { Food } from "@food/shared-types";
import FoodSearchbleItem from "components/molecules/FoodSearchableItem";

type SearchableProps = {
  foods: Food[];
  savedFoods: string[];
  onClearFoods(): void;
  onAddItem(_id: string): () => void;
  onSearch(ev: ChangeEvent<HTMLInputElement>): void;
};

const FormControlSearchable = forwardRef<HTMLInputElement, SearchableProps>(
  ({ foods, onSearch, onAddItem, onClearFoods, savedFoods }, ref) => {
    const { active, setState } = useActive();

    const onClose = () => setState(false);
    const onFocus = () => {
      if (!foods.length) return;

      setState(true);
    };

    const AddNewItemToList = (_id: string) => () => {
      onAddItem(_id)();
      setState(false);
    };

    return (
      <S.FormControlSearch>
        <S.InputContainer>
          <FormControl
            ref={ref}
            required={false}
            icon={IoFastFood}
            onFocus={onFocus}
            onChange={onSearch}
            labelText="Buscar Comidas"
          />
          {active && (
            <S.SearchContainer>
              {foods.map((v) => (
                <FoodSearchbleItem
                  key={v._id}
                  name={v.name}
                  onClick={AddNewItemToList(v._id)}
                  isSaved={savedFoods.includes(v._id)}
                />
              ))}
            </S.SearchContainer>
          )}
        </S.InputContainer>
        <Button
          styles={{ color: active ? "red" : "yellow" }}
          text={active ? "Cerrar" : "Limpiar Lista"}
          onClick={active ? onClose : onClearFoods}
        />
      </S.FormControlSearch>
    );
  }
);

export default FormControlSearchable;
