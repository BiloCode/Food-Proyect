import styled from "styled-components";

import { FONT, FOOD_MODAL_ITEM_HEIGHT, NORMAL_BLUE } from "config/styles";

export const MainContainer = styled.button`
  border: none;
  outline: none;
  display: grid;
  height: ${FOOD_MODAL_ITEM_HEIGHT};
  grid-template-columns: 32px 1fr max-content max-content;
  column-gap: 1.3em;
  align-items: center;
  padding: 0 2em;
  box-sizing: border-box;
  background-color: #fff;
  text-align: initial;
  font-family: ${FONT};
  border-left: 6px solid ${NORMAL_BLUE};
  border-bottom: 1px solid rgba(240, 240, 240);

  &:hover {
    background-color: rgba(250, 250, 250);
  }
`;

export const ImageContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Price = styled.span`
  font-weight: 800;
  font-size: 16px;
  color: ${NORMAL_BLUE};
`;

export const TrashButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;
