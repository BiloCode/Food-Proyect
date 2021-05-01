import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.span`
  margin: 0;
  font-size: 2.1em;
  font-weight: 900;
  font-family: var(--font);
  text-transform: uppercase;
  color: #000;

  &.white {
    color: #fff;
  }

  &.light_black {
    color: ${colors.light_black};
  }

  &.blue {
    color: ${colors.dark_blue};
  }

  &.letter_spacing {
    letter-spacing: 4px;
  }

  &.lowercase {
    text-transform: none;
  }

  &.extra_small {
    font-size: 0.7em;
  }

  &.small {
    font-size: 0.95em;
  }

  &.small_medium {
    font-size: 1.1em;
  }

  &.medium {
    font-size: 1.5em;
  }
`;
