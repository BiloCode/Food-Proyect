import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.p`
  margin: 0;
  font-size: 1.1em;
  font-weight: 400;
  font-family: var(--font);
  line-height: 1.4em;
  color: ${colors.light_black};

  &.white {
    color: #fff;
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
