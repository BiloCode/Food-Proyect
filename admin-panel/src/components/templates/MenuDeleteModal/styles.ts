import { FOOD_MODAL_ITEM_HEIGHT } from "config/styles";
import styled from "styled-components";

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 680px;
  padding: 3em;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  display: grid;
  row-gap: 2em;
`;

const itemsRender = 3;
const Gap = "4px";
const FullGap = `calc(${itemsRender - 1} * ${Gap})`;
const FullHeight = `calc(${FOOD_MODAL_ITEM_HEIGHT} * ${itemsRender})`;
const Height = `calc(${FullGap} + ${FullHeight})`;

export const ListContainer = styled.div`
  width: 100%;
  height: ${Height};
  overflow: auto;
  display: grid;
  grid-auto-rows: max-content;
  row-gap: ${Gap};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  column-gap: 4px;
`;
