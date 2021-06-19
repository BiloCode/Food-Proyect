import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import * as S from "./styles";

import { FaHamburger } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Portals from "components/atoms/Portals";
import DarkScreen from "components/atoms/DarkScreen";
import FormControl from "components/molecules/FormControl";
import MenuModalListSaved from "components/organisms/MenuModalListSaved";
import FormControlSearchable from "components/organisms/FormControlSearchable";

import BranchAddNewMenu from "application/core/BranchOffice/BranchAddNewMenu";

import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { foods } from "store/foods";
import { currentBranch } from "store/currentBranch";
import { setBranchMenu } from "store/branchOffice";

import { FoodModelType } from "application/types/FoodModelType";

type ModalProps = {
  onClose(): void;
};

const MenuModalCreate = ({ onClose }: ModalProps) => {
  const foodStore = useAtomValue(foods);
  const updateBranchMenu = useUpdateAtom(setBranchMenu);
  const currentBranchDetail = useAtomValue(currentBranch);

  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const searchInputRef = useRef<HTMLInputElement>();

  const [foodSaved, setFoodSaved] = useState<FoodModelType[]>([]);
  const [foodFilter, setFoodFilter] = useState<FoodModelType[]>([]);
  const [isSendRequest, setIsSendRequest] = useState<boolean>(false);

  const addFood = (_id: string) => () => {
    const isExists = foodSaved.some((v) => v._id === _id);
    if (isExists) {
      return;
    }

    const foodSelect = [...foodStore.data].find((v) => v._id === _id);
    if (!foodSelect) {
      return;
    }

    searchInputRef.current.value = "";
    setFoodSaved((foods) => [foodSelect, ...foods]);
  };

  const removeFood = (index: number) => () => {
    const newFood = [...foodSaved].filter((_, i) => i !== index);
    setFoodSaved(() => newFood);
  };

  const onSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target.value.trim();
    if (!inputValue) {
      setFoodFilter(() => foodStore.data);
      return;
    }

    const foodFinded = [...foodFilter].find((v) =>
      v.name.includes(inputValue.toUpperCase())
    );

    if (!foodFinded) return;

    setFoodFilter(() => [foodFinded]);
  };

  const onClearFoods = () => setFoodSaved(() => []);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const name = nameRef.current?.value.trim();
    const foodsId = foodSaved.map((v) => v._id);
    const description = descriptionRef.current?.value.trim();

    if (!foodsId.length || !name || !description) return;

    setIsSendRequest(() => true);

    try {
      const menu = await BranchAddNewMenu.exec(currentBranchDetail.branch._id, {
        name,
        description,
        foodsId,
      });

      updateBranchMenu({ branchId: currentBranchDetail.branch._id, menu });
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSendRequest(() => false);
    }
  };

  useEffect(() => {
    if (foodStore.requestState !== "complete") return;

    setFoodFilter(() => foodStore.data);
  }, [foodStore]);

  return (
    <Portals>
      <DarkScreen>
        <S.MainContainer>
          <S.Container>
            <Title>Crear Nuevo Menu</Title>
            <S.FormContainer onSubmit={onSubmit}>
              <S.FormControlText>
                <FormControl
                  ref={nameRef}
                  labelText="Nombre"
                  icon={FaHamburger}
                />
                <FormControl
                  ref={descriptionRef}
                  labelText="Descripcion"
                  icon={BsReverseLayoutTextSidebarReverse}
                />
              </S.FormControlText>
              <FormControlSearchable
                foods={foodFilter}
                onAddItem={addFood}
                onSearch={onSearch}
                ref={searchInputRef}
                onClearFoods={onClearFoods}
              />
              <MenuModalListSaved foods={foodSaved} onClickTrash={removeFood} />
              <S.BottomContainer>
                <S.ButtonsContainer>
                  <Button
                    type="submit"
                    isLoading={isSendRequest}
                    text="Guardar Informacion"
                    styles={{ color: "yellow" }}
                  />
                  <Button
                    onClick={onClose}
                    text="Cerrar Ventana"
                    disabled={isSendRequest}
                    styles={{ color: "blue" }}
                  />
                </S.ButtonsContainer>
              </S.BottomContainer>
            </S.FormContainer>
          </S.Container>
        </S.MainContainer>
      </DarkScreen>
    </Portals>
  );
};

export default MenuModalCreate;
