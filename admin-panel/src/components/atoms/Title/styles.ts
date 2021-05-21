import styled from "styled-components";

import { FONT } from "config/styles";

export const TextElement = styled.span`
  font-size: 1.4em;
  text-transform: uppercase;
  font-weight: 800;
  font-family: ${FONT};

  &.small_size {
    font-size: 0.9em;
  }
`;
