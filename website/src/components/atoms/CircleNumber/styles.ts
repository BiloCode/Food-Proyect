import styled from "styled-components";

import { colors } from "config/colors";

export const CircleContainer = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${colors.dark_blue};
  color: #fff;
  border: none;
  outline: none;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 50%;
  font-family: var(--font);
  box-sizing: border-box;
  cursor: pointer;

  &:active {
    background-color: ${colors.light_blue};
  }

  &.select {
    color: ${colors.dark_blue};
    background-color: ${colors.normal_yellow};

    &:active {
      background-color: ${colors.light_yellow};
    }
  }
`;
