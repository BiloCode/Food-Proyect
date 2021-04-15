import { colors } from "config/colors";
import styled from "styled-components";

export const Title = styled.span`
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

  &.letter_spacing {
    letter-spacing: 4px;
  }

  &.small {
    font-size: 0.95em;
  }

  &.medium {
    font-size: 1.5em;
  }
`;
