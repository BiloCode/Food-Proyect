import { ChangeEvent } from "react";
import * as S from "./styles";

import useFoodActions from "hooks/useFoodActions";

import SearchBar from "components/molecules/SearchBar";
import ContainerSticky from "components/atoms/ContainerSticky";
import HeaderDeleteMode from "components/molecules/HeaderDeleteMode";
import DropdownFoodActions from "components/molecules/DropdownFoodActions";

type FoodActionsProps = {
  onChangeSearch(ev: ChangeEvent<HTMLInputElement>): void;
  onCreateToggle(): void;
};

const FoodActions = ({ onChangeSearch, onCreateToggle }: FoodActionsProps) => {
  const { onDeleteMode, offDeleteMode, onClickDelete, deleteMode } =
    useFoodActions();

  return (
    <ContainerSticky>
      <S.ActionsContainer>
        {!deleteMode.state ? (
          <>
            <S.SearchBarContainer>
              <SearchBar
                onChange={onChangeSearch}
                placeholder="Digite un nombre..."
              />
            </S.SearchBarContainer>
            <DropdownFoodActions
              onClickRemoveFood={onDeleteMode}
              onClickFoodCreate={onCreateToggle}
            />
          </>
        ) : (
          <HeaderDeleteMode
            onSuccess={onClickDelete}
            onCancel={offDeleteMode}
            elementsSelected={deleteMode.ids.length}
          />
        )}
      </S.ActionsContainer>
    </ContainerSticky>
  );
};

export default FoodActions;
