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

import useCreateMenuInBranch from "hooks/useCreateMenuInBranch";
import { FoodPriceSum } from "@food-proyect/shared-functions";

type ModalProps = {
  onClose(): void;
};

const MenuModalCreate = ({ onClose }: ModalProps) => {
  const {
    ref,
    addFood,
    onClearFoods,
    onSearch,
    onSubmit,
    removeFood,
    foodStates: { foodFilter, isSendRequest, foodSaved },
  } = useCreateMenuInBranch(onClose);

  return (
    <Portals>
      <DarkScreen>
        <S.MainContainer>
          <S.Container>
            <Title>Crear Nuevo Menu</Title>
            <S.FormContainer onSubmit={onSubmit}>
              <S.FormInputsContainer>
                <S.FormControlText>
                  <FormControl
                    ref={ref.nameRef}
                    labelText="Nombre"
                    icon={FaHamburger}
                  />
                  <FormControl
                    ref={ref.descriptionRef}
                    labelText="Descripcion"
                    icon={BsReverseLayoutTextSidebarReverse}
                  />
                </S.FormControlText>
                <FormControlSearchable
                  foods={foodFilter}
                  onAddItem={addFood}
                  onSearch={onSearch}
                  ref={ref.searchInputRef}
                  onClearFoods={onClearFoods}
                  savedFoods={foodSaved.map((v) => v._id)}
                />
                <MenuModalListSaved
                  foods={foodSaved}
                  onClickTrash={removeFood}
                />
                <S.PriceMessageContainer>
                  <S.PriceMessage>
                    Precio Total :{" "}
                    <span>S/ {FoodPriceSum.exec(foodSaved)}</span>
                  </S.PriceMessage>
                </S.PriceMessageContainer>
              </S.FormInputsContainer>
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
