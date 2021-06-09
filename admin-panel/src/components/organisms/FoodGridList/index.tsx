import { memo } from "react";
import * as S from "./styles";

import FoodCard from "components/molecules/FoodCard";
import { FoodModelType } from "application/types/FoodModelType";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { addNewIdSelect, deleteMode, removeId } from "store/foodDeleteMode";

type ListProps = {
  foods: FoodModelType[];
};

const FoodGridList = ({ foods }: ListProps) => {
  const { ids, state } = useAtomValue(deleteMode);
  const addNewId = useUpdateAtom(addNewIdSelect);
  const removeIdExisting = useUpdateAtom(removeId);

  const onDeleteFood = (_id: string) => () => removeIdExisting(_id);
  const onClickButton = (_id: string, delete_mode: boolean) => () => {
    if (!delete_mode) {
      return;
    }

    addNewId(_id);
  };

  return (
    <S.FoodListContainer>
      <S.FoodList>
        {foods.map((v) => (
          <FoodCard
            key={v._id}
            foodData={v}
            selectable={state}
            isSelect={ids.includes(v._id)}
            onClickSelect={onDeleteFood(v._id)}
            onClickButton={onClickButton(v._id, state)}
          />
        ))}
      </S.FoodList>
    </S.FoodListContainer>
  );
};

export default memo(FoodGridList);
