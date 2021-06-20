import { useState } from "react";
import * as S from "./styles";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import Description from "components/atoms/Description";
import FoodHorizontalCard from "components/molecules/FoodHorizontalCard";

import { MenuType } from "@food-proyect/shared-types";
import BranchRemoveMenu from "application/core/BranchOffice/BranchRemoveMenu";

import { useAtomValue, useResetAtom, useUpdateAtom } from "jotai/utils";
import { currentBranch } from "store/currentBranch";
import { addNewIdSelect, menuDeleteMode } from "store/menuDeleteMode";
import { removeBranchMenu } from "store/branchOffice";

const MenuDeleteModal = () => {
  const currentData = useAtomValue(currentBranch);

  const addNewItem = useUpdateAtom(addNewIdSelect);
  const removeMenus = useUpdateAtom(removeBranchMenu);
  const deleteMode = useAtomValue(menuDeleteMode);
  const deleteModeReset = useResetAtom(menuDeleteMode);

  const [isDeleteEnd, setIsDeleteEnd] = useState<boolean>(false);
  const [menuFilter, setMenuFilter] = useState<MenuType[]>(
    currentData.branch.menu
  );

  const onCancel = () => deleteModeReset();
  const onSelect = (_id: string) => () => {
    addNewItem(_id);
    setMenuFilter((filter) => filter.filter((v) => v._id !== _id));
  };

  const onSucess = async () => {
    if (!deleteMode.ids.length) return;

    setIsDeleteEnd(() => true);

    const branchId = currentData.branch._id;

    try {
      const isUpdated = await BranchRemoveMenu.exec(branchId, deleteMode.ids);

      if (!isUpdated) {
      }

      onCancel();
      removeMenus({
        branchId,
        idsDelete: deleteMode.ids,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleteEnd(() => false);
    }
  };

  return (
    <Portals>
      <DarkScreen>
        <S.CenterContainer>
          <S.MainContainer>
            <Title>Eliminar Menus</Title>
            <S.ListContainer>
              {menuFilter.map((v) => (
                <FoodHorizontalCard
                  key={v._id}
                  selectIcon
                  name={v.title}
                  image={v.foods[0].image}
                  onClickButton={onSelect(v._id)}
                  price={v.foods.reduce((prev, next) => prev + next.price, 0)}
                />
              ))}
            </S.ListContainer>
            <Description size="small">
              Comidas Seleccionadas: {deleteMode.ids.length}
            </Description>
            <S.ButtonContainer>
              <S.ButtonGrid>
                <Button
                  text="Eliminar Seleccion"
                  isLoading={isDeleteEnd}
                  onClick={onSucess}
                  styles={{ color: "blue", size: "small" }}
                />
                <Button
                  text="Cancelar"
                  disabled={isDeleteEnd}
                  onClick={onCancel}
                  styles={{ color: "yellow", size: "small" }}
                />
              </S.ButtonGrid>
            </S.ButtonContainer>
          </S.MainContainer>
        </S.CenterContainer>
      </DarkScreen>
    </Portals>
  );
};

export default MenuDeleteModal;
