import styled from "styled-components";

import {
  FONT,
  NORMAL_BLUE,
  NORMAL_YELLOW,
  NORMAL_BLUE_LIGHT,
  NORMAL_YELLOW_LIGHT,
} from "../../../config/styles";

export const ButtonContainer = styled.button`
  --bg: ${NORMAL_BLUE};
  --txt-color: #fff;
  --bg-hover: ${NORMAL_BLUE_LIGHT};

  width: 100%;
  color: var(--txt-color);
  height: 40px;
  border: none;
  user-select: none;
  font-size: 15px;
  font-weight: 800;
  border-radius: 5px;
  padding: 0 2em;
  box-sizing: border-box;
  font-family: ${FONT};
  text-transform: uppercase;
  background-color: var(--bg);

  &.ghost {
    background-color: transparent;
    border: 2px solid var(--bg);
    --txt-color: var(---bg);
  }

  &.yellow {
    --bg: ${NORMAL_YELLOW};
    --txt-color: ${NORMAL_BLUE};
    --bg-hover: ${NORMAL_YELLOW_LIGHT};
  }

  &.big {
    height: 48px;
  }

  &:not(&:disabled) {
    cursor: pointer;
  }
`;

export const ButtonContainerSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
