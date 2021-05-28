import styled from "styled-components";

import { FONT, SMOOTH_BLACK } from "config/styles";

export const TextElement = styled.span`
  font-size: 1.4em;
  text-transform: uppercase;
  font-weight: 800;
  font-family: ${FONT};

  &.c_black_ligth {
    color: ${SMOOTH_BLACK};
  }

  &.small_size {
    font-size: 0.9em;
  }

  &.small_medium {
    font-size: 1em;
  }
`;
