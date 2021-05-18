import styled from "styled-components";

import {
  FONT,
  DARK_BLUE,
  DARK_BLUE_LIGHT,
  DARK_BLUE_LIGHT_B,
} from "config/styles";

export const MainContainer = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.8em 2.2em;
  box-sizing: border-box;
  background-color: ${DARK_BLUE};
  border-bottom: 1px solid ${DARK_BLUE_LIGHT};
  cursor: pointer;

  &.select {
    border-bottom-color: ${DARK_BLUE_LIGHT_B};
  }

  &:hover {
    background-color: ${DARK_BLUE_LIGHT};
  }
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: flex-end;
  column-gap: 1em;
`;

export const Text = styled.span`
  font-family: ${FONT};
  color: #fff;
  font-weight: 700;
`;

export const ItemStateContainer = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
`;
