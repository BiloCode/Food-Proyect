import styled, { keyframes } from "styled-components";
import {
  BACKGROUND_LIGHT,
  BLACK_SUPER_LIGHT,
  NORMAL_WHITE,
} from "config/styles";

const slideDown = keyframes`
  from {
    opacity:0;
    visibilty:hidden;
    top: 90%;
  }

  to {
    opacity:1;
    visibilty:visible;
    top: calc(100% + 1em);
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  background-color: ${NORMAL_WHITE};
  overflow: hidden;
  font-size: 14px;
  color: ${BLACK_SUPER_LIGHT};
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 -5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: ${slideDown} 0.2s linear forwards;
`;

export const DropDownOption = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
  justify-items: left;
  grid-template-columns: 25px 1fr;
  column-gap: 1em;
  padding: 0 2em;
  box-sizing: border-box;
  background-color: #fff;

  &:hover {
    background-color: ${BACKGROUND_LIGHT};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: calc(50% + 30px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
