import styled from "styled-components";

import { colors } from "config/colors";

export const Button = styled.button`
  width: 100%;
  color: #fff;
  height: 40px;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 900;
  border-radius: 10px;
  font-family: var(--font);
  text-transform: uppercase;
  background-color: ${colors.dark_blue};

  &.yellow {
    color: ${colors.dark_blue};
    background-color: ${colors.normal_yellow};
  }

  &:active {
    transform: scale(0.95);
  }
`;
