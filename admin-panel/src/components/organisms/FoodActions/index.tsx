import { ChangeEvent } from "react";
import * as S from "./styles";

import SearchBar from "components/molecules/SearchBar";
import HeaderDeleteMode from "components/molecules/HeaderDeleteMode";
import DropdownFoodActions from "components/molecules/DropdownFoodActions";

import { useAtom } from "jotai";
import { deleteMode } from "store/foodDeleteMode";

type FoodActionsProps = {
  onChangeSearch(ev: ChangeEvent<HTMLInputElement>): void;
  onCreateToggle(): void;
};

const FoodActions = ({ onChangeSearch, onCreateToggle }: FoodActionsProps) => {
  const [delete_mode, setDeleteMode] = useAtom(deleteMode);

  const activeDeleteMode = () => {
    setDeleteMode((delete_mode) => ({
      ...delete_mode,
      state: true,
    }));
  };

  const desactiveDeleteMode = () => {
    setDeleteMode(() => ({
      ids: [],
      state: false,
    }));
  };

  return (
    <S.ActionsContainer>
      {!delete_mode.state ? (
        <>
          <S.SearchBarContainer>
            <SearchBar
              onChange={onChangeSearch}
              placeholder="Digite un nombre..."
            />
          </S.SearchBarContainer>
          <DropdownFoodActions
            onClickRemoveFood={activeDeleteMode}
            onClickFoodCreate={onCreateToggle}
          />
        </>
      ) : (
        <HeaderDeleteMode
          onSuccess={() => null}
          onCancel={desactiveDeleteMode}
          foodSelectNumber={delete_mode.ids.length}
        />
      )}
    </S.ActionsContainer>
  );
};

export default FoodActions;
