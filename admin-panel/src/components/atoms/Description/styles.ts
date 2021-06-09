import styled from "styled-components";

import { BLACK, NORMAL_WHITE, FONT, BLACK_LIGHT } from "config/styles";

export const Container = styled.p`
  margin: 0;
  font-size: 1.1em;
  font-family: ${FONT};
  line-height: 1.4em;
  color: ${BLACK};

  &.white {
    color: ${NORMAL_WHITE};
  }

  &.gray {
    color: ${BLACK_LIGHT};
  }

  &.semi_bold {
    font-weight: 500;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &.bold {
    font-weight: bold;
  }

  &.extra_small {
    font-size: 0.7em;
  }

  &.small {
    font-size: 0.95em;
  }

  &.medium {
    font-size: 1.1em;
  }

  &.large {
    font-size: 1.5em;
  }
`;
