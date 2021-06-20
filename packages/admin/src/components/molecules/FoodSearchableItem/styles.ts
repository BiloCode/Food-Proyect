import styled from "styled-components";

import {
  FONT,
  BLACK,
  FOOD_MODAL_ITEM_HEIGHT,
  BLACK_LIGHT_B,
} from "config/styles";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1em;
  align-items: center;
`;

export const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${BLACK};
`;

export const Name = styled.span`
  font-family: ${FONT};
  font-weight: 600;
  font-size: 0.95em;
`;

export const TextSaved = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  font-family: ${FONT};
  font-size: 14px;
  letter-spacing: 2px;
`;

/** -- Main -- **/

export const MainContainer = styled.div`
  width: 100%;
  height: ${FOOD_MODAL_ITEM_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(240, 240, 240);

  &:not(&.saved) {
    cursor: pointer;
  }

  &.saved {
    ${Indicator} {
      background-color: ${BLACK_LIGHT_B};
    }

    ${Name} {
      color: ${BLACK_LIGHT_B};
    }
  }

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;
