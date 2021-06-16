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

import { useAtomValue } from "jotai/utils";
import { foods } from "store/foods";

import { FoodModelType } from "application/types/FoodModelType";

type ModalProps = {
  onClose(): void;
};

const MenuModalCreate = ({ onClose }: ModalProps) => {
  const foodStore = useAtomValue(foods);

  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();

  const [foodSaved, setFoodSaved] = useState<FoodModelType[]>([]);
  const [foodFiltered, setFoodFiltered] = useState<FoodModelType[]>([]);

  const addFood = (_id: string) => () => {
    const foodSelect = [...foodStore.data].find((v) => v._id === _id);
    if (!foodSelect) {
      return;
    }

    setFoodSaved((foods) => [...foods, foodSelect]);
  };

  const onSearch = (ev: ChangeEvent<HTMLInputElement>) => {};

  const onClearFoods = () => setFoodSaved(() => []);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const name = nameRef.current?.value.trim();
    const description = descriptionRef.current?.value.trim();

    if (!foodSaved.length || !name || !description) return;

    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (foodStore.requestState !== "complete") return;

    setFoodFiltered(() => foodStore.data);
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
                foods={foodFiltered}
                onSearch={onSearch}
                onAddItem={addFood}
                onClearFoods={onClearFoods}
              />
            </S.FormContainer>
            <MenuModalListSaved foods={foodSaved} />
            <S.BottomContainer>
              <S.ButtonsContainer>
                <Button
                  type="submit"
                  text="Guardar Informacion"
                  styles={{ color: "yellow" }}
                />
                <Button
                  onClick={onClose}
                  text="Cerrar Ventana"
                  styles={{ color: "blue" }}
                />
              </S.ButtonsContainer>
            </S.BottomContainer>
          </S.Container>
        </S.MainContainer>
      </DarkScreen>
    </Portals>
  );
};

export default MenuModalCreate;
