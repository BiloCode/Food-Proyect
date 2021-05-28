import {
  NORMAL_GRAY,
  BLACK_LIGHT_C,
  BACKGROUND_LIGHT,
  FONT,
  NORMAL_BLUE,
  NORMAL_WHITE,
  BLACK_SUPER_LIGHT,
} from "config/styles";
import styled from "styled-components";

export const TabOptionContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${BACKGROUND_LIGHT};
  height: 70px;

  &::before {
    content: "";
    z-index: 50;
    width: 3fr;
    position: absolute;
    height: 5px;
    width: 100%;
    bottom: 0;
    background-color: ${BLACK_LIGHT_C};
  }
`;

export const Option = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  border: 0;
  align-items: center;
  text-transform: uppercase;
  font-weight: 1000;
  color: ${NORMAL_GRAY};
  font-family: ${FONT};
  font-size: 1em;
  cursor: pointer;

  &.active {
    z-index: 100;
    color: ${NORMAL_BLUE};

    &::before {
      content: "";
      width: 3fr;
      position: absolute;
      height: 5px;
      width: 100%;
      bottom: 0;
      background-color: ${NORMAL_BLUE};
    }
  }
`;

export const IconMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  left: calc(50% + 35px);
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 0.5em;
  display: none;
  flex-direction: column;
  background-color: ${NORMAL_WHITE};
  font-size: 14px;
  color: ${BLACK_SUPER_LIGHT};
  cursor: pointer;

  &.toggleActive {
    display: flex;
  }
`;

export const DropDownOption = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
  justify-items: left;
  grid-template-columns: 25px 1fr;
  column-gap: 1em;
  padding: 0 20px;
  box-sizing: border-box;

  &:hover {
    background-color: ${BACKGROUND_LIGHT};
  }
`;
