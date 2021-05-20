import styled from "styled-components";

import {
  FONT,
  DARK_BLUE,
  NORMAL_BLUE,
  NORMAL_YELLOW,
  NORMAL_BLUE_LIGHT,
  DARK_BLUE_LIGHT,
  NORMAL_YELLOW_LIGHT,
} from "config/styles";

export const ButtonContainer = styled.button`
  width: 100%;
  color: #fff;
  height: 40px;
  border: none;
  outline: none;
  user-select: none;
  font-size: 1em;
  font-weight: 800;
  border-radius: 6px;
  font-family: ${FONT};
  text-transform: uppercase;
  background-color: ${DARK_BLUE};

  &:not(&.yellow):not(&.red):not(&:disabled):hover {
    background-color: ${DARK_BLUE_LIGHT};
  }

  &.yellow {
    color: ${NORMAL_BLUE};
    background-color: ${NORMAL_YELLOW};

    &:hover {
      background-color: ${NORMAL_YELLOW_LIGHT};
    }
  }

  &.blue {
    color: #fff;
    background-color: ${NORMAL_BLUE};

    &:hover {
      background-color: ${NORMAL_BLUE_LIGHT};
    }
  }

  &.small {
    font-size: 0.8em;
    height: 32px;
  }

  &.medium {
    font-size: 0.95em;
    height: 38px;
  }

  &.big {
    height: 50px;
  }

  &:not(&:disabled) {
    cursor: pointer;
  }

  &:not(&:disabled):active {
    transform: scale(0.98);
  }
`;

export const ButtonContainerSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
