import { colors } from "config/colors";
import styled from "styled-components";

export const Title = styled.span`
  margin: 0;
  font-size: 2em;
  font-weight: 900;
  word-spacing: 12px;
  font-family: var(--font);
  text-transform: uppercase;
  color: ${colors.light_black};

  &.white {
    color: #fff;
  }

  &.small {
    font-size: 0.95em;
  }

  &.medium {
    font-size: 1.5em;
  }
`;
