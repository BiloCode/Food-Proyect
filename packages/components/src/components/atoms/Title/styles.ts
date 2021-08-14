import styled from "styled-components";

import { Colors, Font } from "../../../config";

export const TextElement = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: ${Font};
  color: ${Colors.BLACK};

  &.blue {
    color: ${Colors.BLUE};
  }

  &.white {
    color: ${Colors.WHITE};
  }

  &:not(&.lowercase) {
    text-transform: uppercase;
  }

  &.e_bold {
    font-weight: 800;
  }

  &.black {
    font-weight: 900;
  }

  &.small {
    font-size: 15px;
  }

  &.medium {
    font-size: 18px;
  }

  &.m_big {
    font-size: 22px;
  }

  &.big {
    font-size: 24px;
  }

  &.e_big {
    font-size: 32px;
  }
`;
