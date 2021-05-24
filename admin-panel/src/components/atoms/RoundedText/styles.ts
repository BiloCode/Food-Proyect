import {
  FONT,
  NORMAL_BLUE,
  NORMAL_GREEN,
  NORMAL_RED,
  NORMAL_YELLOW,
} from "config/styles";
import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  background-color: ${NORMAL_BLUE};
  border-radius: 1em;
  padding: 0.2em 0.8em;
  box-sizing: border-box;
  font-size: 0.9em;
  font-weight: bold;
  font-family: ${FONT};
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &.yellow {
    background-color: ${NORMAL_YELLOW};
  }

  &.red {
    background-color: ${NORMAL_RED};
  }

  &.green {
    background-color: ${NORMAL_GREEN};
  }

  &.blue {
    background-color: ${NORMAL_BLUE};
  }

  &.extra_small {
    font-size: 0.7em;
  }
`;
