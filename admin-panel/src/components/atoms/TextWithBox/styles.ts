import styled from "styled-components";

import { DARK_BLUE, FONT, NORMAL_GREEN } from "config/styles";

const boxSize = "24px";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: ${boxSize} 1fr;
  column-gap: 10px;
  align-items: center;
`;

export const BoxElement = styled.div`
  width: ${boxSize};
  height: ${boxSize};
  border-radius: calc(${boxSize} / 3);
  background-color: ${DARK_BLUE};

  &.green {
    background-color: ${NORMAL_GREEN};
  }
`;

export const TextElement = styled.span`
  font-family: ${FONT};
  font-weight: 600;
  font-size: 0.9em;
`;
