import styled from "styled-components";

import { colors } from "config/colors";

export const ButtonContainer = styled.button`
  width: 100%;
  color: #fff;
  height: 40px;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 900;
  border-radius: 6px;
  font-family: var(--font);
  text-transform: uppercase;
  background-color: ${colors.dark_blue};

  &:not(&.yellow):hover {
    background-color: ${colors.light_blue};
  }

  &.small {
    font-size: 0.8em;
    height: 32px;
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

  &:active {
    transform: scale(0.95);
  }
`;

export const ButtonContainerSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
