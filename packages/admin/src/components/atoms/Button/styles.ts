import styled from "styled-components";

import {
  FONT,
  DARK_BLUE,
  NORMAL_BLUE,
  NORMAL_YELLOW,
  NORMAL_BLUE_LIGHT,
  DARK_BLUE_LIGHT,
  NORMAL_YELLOW_LIGHT,
  NORMAL_GREEN,
  NORMAL_GREEN_LIGHT,
  NORMAL_RED,
  NORMAL_RED_LIGHT,
  BLACK_LIGHT_C,
  BLACK_LIGHT_B,
} from "config/styles";

export const ButtonContainer = styled.button`
  --bg: ${DARK_BLUE};
  --txt-color: #fff;
  --bg-hover: ${DARK_BLUE_LIGHT};

  width: 100%;
  color: var(--txt-color);
  height: 40px;
  border: none;
  outline: none;
  user-select: none;
  font-size: 1em;
  font-weight: 800;
  border-radius: 6px;
  font-family: ${FONT};
  text-transform: uppercase;
  background-color: var(--bg);

  &.yellow {
    --bg: ${NORMAL_YELLOW};
    --txt-color: ${NORMAL_BLUE};
    --bg-hover: ${NORMAL_YELLOW_LIGHT};
  }

  &.blue {
    --bg: ${NORMAL_BLUE};
    --bg-hover: ${NORMAL_BLUE_LIGHT};
  }

  &.green {
    --bg: ${NORMAL_GREEN};
    --bg-hover: ${NORMAL_GREEN_LIGHT};
  }

  &.red {
    --bg: ${NORMAL_RED};
    --bg-hover: ${NORMAL_RED_LIGHT};
  }

  &.disabled {
    --bg: ${BLACK_LIGHT_C};
    --txt-color: ${BLACK_LIGHT_B};
  }

  &.small {
    font-size: 0.85em;
    height: 34px;
  }

  &.medium {
    font-size: 0.95em;
    height: 38px;
  }

  &.big {
    height: 50px;
  }

  &:not(&:disabled):hover {
    background-color: var(--bg-hover);
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
