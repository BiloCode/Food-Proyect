import { BACKGROUND_LIGHT, FONT } from "config/styles";
import styled from "styled-components";

const InputHeight = "44px";

export const MainContainer = styled.div`
  width: 220px;
  height: ${InputHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
`;

export const ButtonDropdown = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: ${FONT};
  border-radius: inherit;

  &:hover {
    background-color: ${BACKGROUND_LIGHT};
  }
`;

export const ButtonNestingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 10px;
  align-items: center;
`;

export const ButtonMessage = styled.span`
  font-weight: 900;
  font-size: 13px;
  text-transform: uppercase;
`;

export const DropdownList = styled.ul`
  width: 100%;
  position: absolute;
  top: calc(${InputHeight} + 15px);
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 1;
  list-style: none;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const DropdownItem = styled.li`
  height: 48px;
`;
