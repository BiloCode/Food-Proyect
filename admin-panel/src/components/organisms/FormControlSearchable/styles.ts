import styled from "styled-components";

import { ATOM_INPUT_HEIGHT, FOOD_MODAL_ITEM_HEIGHT } from "config/styles";

export const FormControlSearch = styled.fieldset`
  border: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 220px;
  column-gap: 10px;
  align-items: flex-end;
`;

export const InputContainer = styled.div`
  position: relative;
`;

const itemsRender = 3;
const itemsGap = "3px";
const bottomSpacing = "10px";

const FullGap = `calc(${itemsGap} * ${itemsRender - 1})`;
const FullHeightItems = `calc(${FOOD_MODAL_ITEM_HEIGHT} * ${itemsRender})`;

const FullHeight = `calc(${FullHeightItems} + ${FullGap})`;

export const SearchContainer = styled.div`
  width: 100%;
  height: ${FullHeight};
  overflow: auto;
  position: absolute;
  top: calc(${ATOM_INPUT_HEIGHT} * 2);
  left: 0;
  background-color: #fff;
  box-sizing: border-box;
  display: grid;
  row-gap: ${itemsGap};
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;
