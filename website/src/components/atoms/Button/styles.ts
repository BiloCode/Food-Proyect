import styled from "styled-components";

import { colors } from "config/colors";

export const ButtonContainer = styled.button`
  width: 100%;
  color: #fff;
  height: 40px;
  border: none;
  outline: none;
  user-select: none;
  font-size: 1em;
  font-weight: 900;
  border-radius: 6px;
  font-family: var(--font);
  text-transform: uppercase;
  background-color: ${colors.dark_blue};

  &:not(&.yellow):not(&.red):hover {
    background-color: ${colors.light_blue};
  }

  &.small {
    font-size: 0.8em;
    height: 32px;
  }

  &.medium {
    font-size: 0.9em;
    height: 38px;
  }

  &.big {
    height: 50px;
  }

  &.yellow {
    color: ${colors.dark_blue};
    background-color: ${colors.normal_yellow};

    &:hover {
      background-color: ${colors.light_yellow};
    }
  }

  &.red {
    background-color: ${colors.red};

    &:hover {
      background-color: ${colors.light_red};
    }
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
